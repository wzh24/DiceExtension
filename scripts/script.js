let dice = '⚀';
let sum = 1;

function clamp(value, min, max){
    value = Math.max(value, min);
    value = Math.min(value, max);
    return value
}

const DieSides = Object.freeze({
    0: '⚀',
    1: '⚁', 
    2: '⚂',
    3: '⚃',
    4: '⚄',
    5: '⚅'
})

async function roll(){
    // document.getElementById('Title').innerHTML = document.getElementById("diceType").value;
    let diceType = document.getElementById("diceType").value; 
    let numberOfDice = 1;
    if(diceType.length != 0){
        numberOfDice = clamp(diceType.charAt(0), 1, 5);
        if(numberOfDice == NaN){
            numberOfDice = 1;
        }
    }
    document.getElementById('Title').innerHTML = numberOfDice;
    dice = DieSides[Math.floor(Math.random()*6)];
    for(let i = 0; i < 10; i++){
        await new Promise(resolve => setTimeout(resolve, 100));
        dice = DieSides[Math.floor(Math.random()*6)];
        for(let j = 1; j < numberOfDice; j++){
            dice += DieSides[Math.floor(Math.random()*6)];
        }
        document.getElementById('Dice').innerHTML = dice;
    }
    await new Promise(resolve => setTimeout(resolve, 100));
    diceValue = Math.floor(Math.random()*6);
    dice = DieSides[diceValue];
    sum = diceValue;
    for(let j = 1; j < numberOfDice; j++){
        diceValue = Math.floor(Math.random()*6);
        dice += DieSides[diceValue];
        sum += (diceValue+1);
    }
    document.getElementById('Dice').innerHTML = dice;
    // document.getElementById('Dice').insertAdjacentHTML("beforeend", `<br>Sum: ${sum}`)
    document.getElementById('Sum').innerHTML = (`Sum: ${sum + 1}`)
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

function display(){
    alert("hi");
}

document.getElementById('Dice').innerHTML = dice;
document.getElementById('diceRoll').addEventListener('click', roll);
document.getElementById('tab1').addEventListener('click', ()=>changeTab(1));
document.getElementById('tab2').addEventListener('click', ()=>changeTab(2));


