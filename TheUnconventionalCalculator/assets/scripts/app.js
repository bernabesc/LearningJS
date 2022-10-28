let defualtResult = 0;
let currentResult = defualtResult;

addBtn.addEventListener('click', add);



function add(num1, num2){
    currentResult = currentResult + userInput.value;
    outputResult(currentResult,'');
}