let dice = '⚀';
let sum = 1;
const DieSides = Object.freeze({
    0: '⚀',
    1: '⚁', 
    2: '⚂',
    3: '⚃',
    4: '⚄',
    5: '⚅'
})

async function roll(){
    dice = DieSides[Math.floor(Math.random()*6)];
    for(let i = 0; i < 10; i++){
        await new Promise(resolve => setTimeout(resolve, 100));
        dice = DieSides[Math.floor(Math.random()*6)];
        document.getElementById('Dice').innerHTML = dice;
    }
    document.getElementById('Dice').innerHTML = dice;
}

function changeTab(tab){
    document.getElementById('tab1');
    document.getElementById('tab2');
    if(tab == 1){
        document.getElementById('tab1').classList.add('active');
        document.getElementById('tab2').classList.remove('active');
    } else {
        document.getElementById('tab2').classList.add('active');
        document.getElementById('tab1').classList.remove('active');
    }
}

function display(){
    alert("hi");
}

document.getElementById('Dice').innerHTML = dice;
document.getElementById('diceRoll').addEventListener('click', roll);
document.getElementById('tab1').addEventListener('click', ()=>changeTab(1));
document.getElementById('tab2').addEventListener('click', ()=>changeTab(2));


