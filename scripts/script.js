let dice = "⚀";
let sum = 1;

function clamp(value, min, max){
    value = Math.max(value, min);
    value = Math.min(value, max);
    return value
}

const sixSided = Object.freeze({
    0: '⚀',
    1: '⚁', 
    2: '⚂',
    3: '⚃',
    4: '⚄',
    5: '⚅'
})

let e = {};
for(let i = 1; i <= 20; i++){
    let valueForIPips = 0;
    for(let j = 1; j <= i; j++){
        valueForIPips += j;
    }
    e[i] = (valueForIPips/i);
}
const expectedValue = Object.freeze(e);

const DieSides = Object.freeze({
    0: "<img src='diceImages/1.svg' alt='1 image' height='15%' width='15%'/>",
    1: "<img src='diceImages/2.svg' alt='1 image' height='15%' width='15%'/>", 
    2: "<img src='diceImages/3.svg' alt='1 image' height='15%' width='15%'/>",
    3: "<img src='diceImages/4.svg' alt='1 image' height='15%' width='15%'/>",
    4: "<img src='diceImages/5.svg' alt='1 image' height='15%' width='15%'/>",
    5: "<img src='diceImages/6.svg' alt='1 image' height='15%' width='15%'/>",
    6: "<img src='diceImages/7.svg' alt='1 image' height='15%' width='15%'/>",
    7: "<img src='diceImages/8.svg' alt='1 image' height='15%' width='15%'/>", 
    8: "<img src='diceImages/9.svg' alt='1 image' height='15%' width='15%'/>",
    9: "<img src='diceImages/10.svg' alt='1 image' height='15%' width='15%'/>",
    10: "<img src='diceImages/11.svg' alt='1 image' height='15%' width='15%'/>",
    11: "<img src='diceImages/12.svg' alt='1 image' height='15%' width='15%'/>",
    12: "<img src='diceImages/13.svg' alt='1 image' height='15%' width='15%'/>",
    13: "<img src='diceImages/14.svg' alt='1 image' height='15%' width='15%'/>", 
    14: "<img src='diceImages/15.svg' alt='1 image' height='15%' width='15%'/>",
    15: "<img src='diceImages/16.svg' alt='1 image' height='15%' width='15%'/>",
    16: "<img src='diceImages/17.svg' alt='1 image' height='15%' width='15%'/>",
    17: "<img src='diceImages/18.svg' alt='1 image' height='15%' width='15%'/>",
    18: "<img src='diceImages/19.svg' alt='1 image' height='15%' width='15%'/>",
    19: "<img src='diceImages/20.svg' alt='1 image' height='15%' width='15%'/>",
})


async function roll(){
    const re = /^[0-9]+\+?d\+?[0-9]+$/gi;
    const re2 = /^[0-9]+$/gi;
    // document.getElementById('Title').innerHTML = document.getElementById("diceType").value;
    let diceType = document.getElementById("diceType").value; 
    let numberOfDice = 1;
    let pips = 6;
    let diceShape = DieSides;
    if(diceType.length != 0){
        if(diceType.match(re2) != null){
            numberOfDice = clamp(diceType.match(re2), 1, 20);
        } else if (diceType.match(re) != null){
            // document.getElementById('Title').innerHTML = diceType.split(/\+?d\+?/gi)[0] + "|" +diceType.split(/\+?d\+?/gi)[1]
            let splitted = diceType.split(/\+?d\+?/gi);
            numberOfDice = clamp(splitted[0], 1, 20);
            pips = clamp(splitted[1], 1, 20);
        }
    }
    document.getElementById("diceType").value = numberOfDice +'d'+pips;
    if(pips <= 6){
        diceShape = sixSided;
    }
    dice = diceShape[Math.floor(Math.random()*pips)];
    for(let i = 0; i < 10; i++){
        await new Promise(resolve => setTimeout(resolve, 100));
        dice = "";
        for(let j = 0; j < numberOfDice; j++){
            dice += diceShape[Math.floor(Math.random()*pips)];
            if((j+1)%5==0){
                dice+='<br>';
            }
        }
        document.getElementById('Dice').innerHTML = dice;
    }
    await new Promise(resolve => setTimeout(resolve, 100));
    dice = "";
    sum = 0;
    for(let j = 0; j < numberOfDice; j++){
        diceValue = Math.floor(Math.random()*pips);
        dice += diceShape[diceValue];
        sum += (diceValue+1);
        if((j+1)%5==0){
            dice+='<br>';
        }
    }
    document.getElementById('Dice').innerHTML = dice;
    // document.getElementById('Dice').insertAdjacentHTML("beforeend", `<br>Sum: ${sum}`)
    document.getElementById('Sum').innerHTML = (`Sum: ${sum}`)
}

function changeTab(tab){
    document.getElementById('tab1');
    document.getElementById('tab2');
    if(tab == 1){
        document.getElementById('tab1').classList.add('active');
        document.getElementById('tab2').classList.remove('active');
        document.getElementById('roll-tab').classList.remove('hideTab');
        document.getElementById('expected-tab').classList.add('hideTab');
    } else {
        document.getElementById('tab2').classList.add('active');
        document.getElementById('tab1').classList.remove('active');
        document.getElementById('roll-tab').classList.add('hideTab');
        document.getElementById('expected-tab').classList.remove('hideTab');
    }
}

function findExpected(){
    
    const re = /^[0-9]+\+?d\+?[0-9]+$/gi;
    const re2 = /^[0-9]+$/gi;
    let diceType = document.getElementById("diceTypeExpected").value; 
    let numberOfDice = 1;
    let pips = 6;
    if(diceType.length != 0){
        if(diceType.match(re2) != null){
            numberOfDice = clamp(diceType.match(re2), 1, 20);
        } else if (diceType.match(re) != null){
            // document.getElementById('Title').innerHTML = diceType.split(/\+?d\+?/gi)[0] + "|" +diceType.split(/\+?d\+?/gi)[1]
            let splitted = diceType.split(/\+?d\+?/gi);
            numberOfDice = clamp(splitted[0], 1, 20);
            pips = clamp(splitted[1], 1, 20);
        }
    }
    document.getElementById("diceType").value = numberOfDice +'d'+pips;
    document.getElementById('Ex').innerHTML = `result: ${numberOfDice*expectedValue[pips]}`;

}

document.getElementById('Dice').innerHTML = dice;
document.getElementById('diceRoll').addEventListener('click', roll);
document.getElementById('diceExpected').addEventListener('click', findExpected);
document.getElementById('tab1').addEventListener('click', ()=>changeTab(1));
document.getElementById('tab2').addEventListener('click', ()=>changeTab(2));

//preloads the dice images
preloadedDiceImages = [];
for(let i = 0; i < 20; i++){
    let tempImage = new Image();
    tempImage.src = `diceImages/${i+1}.svg`
    preloadedDiceImages.push(tempImage);

}
