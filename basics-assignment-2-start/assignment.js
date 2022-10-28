const task3Element = document.getElementById('task-3');

greetUser('Alex');
alert(joinStrings('Hi','there','Alex!'));

task3Element.addEventListener('click',greet);

function greet(){
    alert(`Hey there!`);
}

function greetUser(name){
    alert(`Hey there ${name}!`);
}

function joinStrings(name1,name2,name3){
    return  (`${name1} ${name2} ${name3}`);
}