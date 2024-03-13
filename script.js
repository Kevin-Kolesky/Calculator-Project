
//Find the buttons
const buttons = document.querySelector('.button');

//Add event lister to the buttons
buttons.forEach(elbutton => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        document.getElementById('display').value += value;
    }); 
});

function calculate(expression){
            //Splits a string into array of substrings, the parameter is the seperator
    //Note that the seperator will also be in the array if the regex is wrapped in ()
        //Example: /( [+\-*/] )/ will be 12+44+-667/99 = [12,+,44,+,0,-,667,/,99] 
const tokens = expression.split(/([+\-*/])/);
            //str to float
let result = parseFloat(tokens[0]);

for (let i = 1; i < tokens.length; i += 2){
    const opperator = tokens[i];
}
}










// //Display
// const display = document.getElementById('display');

// //Buttons
// document.getElementById('0').addEventListener('click',type0());
// document.getElementById('1').addEventListener('click',type1());
// document.getElementById('2').addEventListener('click',type2());
// document.getElementById('3').addEventListener('click',type3());
// document.getElementById('4').addEventListener('click',type4());
// document.getElementById('5').addEventListener('click',type5());
// document.getElementById('6').addEventListener('click',type6());
// document.getElementById('7').addEventListener('click',type7());
// document.getElementById('8').addEventListener('click',type8());
// document.getElementById('9').addEventListener('click',type9());
// document.getElementById('add').addEventListener('click',add());
// document.getElementById('dot').addEventListener('click',dot());
// document.getElementById('ac'.addEventListener('click',allClear()));
// document.getElementById('equal').addEventListener('click',equal());
// document.getElementById('divide').addEventListener('click',divide());
// document.getElementById('multiply').addEventListener('click',multiply());
// document.getElementById('subtract').addEventListener('click',subtract());
// let num = 0;

// function addToDisplay(input){
//     display.value =+ input;
// }

// function subtract(){

// }

// function add(){
    
// }

// function multiply(){
    
// }

// function dot(){
    
// }

// function allClear(){
//     display.value = "";
//     num = 0;
// }

// function divide(){
    
// }

// function equal(){
    
// }

// function subtract(){
    
// }
