var number = document.querySelectorAll('.numbers div'),
operator = document.querySelectorAll('.operator div'),
equal = document.querySelector('.equal'),
input = document.getElementById('input'),
reset = document.querySelector('.reset');
// var firstNumber

for(let i=0; i<number.length; i++){
  number[i].addEventListener('click', (event) => {
    input.innerHTML += event.target.textContent;
    var firstNumber = input.innerHTML;
})
}

for(let j=0; j<operator.length; j++){
  operator[j].addEventListener('click', (event) => {
    var firstNumber = input.innerHTML;

    if(firstNumber.length == 0){
      input.innerHTML = ''
    }
    else{
      input.innerHTML += event.target.textContent;
    }

    
  })
}

equal.addEventListener('click', () => {
  var string = input.innerHTML;
  console.log(string);

  var num = string.split(/\+|\-|\×|\÷/g)
  console.log(num)

  var operator = string.replace(/[0-9]|\./g,'').split('')
  console.log(operator)

  //search if there is divide operator by using indexOf
  var divide = operator.indexOf("÷");
  //loop until indexOf==-1
  while (divide != -1){
    num.splice(divide,2,num[divide]/num[divide+1]);
    operator.splice(divide,1);
    divide = operator.indexOf("÷");
    console.log("divide "+divide);
  }
  //if indexOf divide == -1, proceed to next operator.

  //search if there is multiply operator using indexOf
  var multiply = operator.indexOf("×");
  //loop until indexOf == -1
  while (multiply != -1){
    num.splice(multiply,2,num[multiply]*num[multiply+1]);
    operator.splice(multiply,1);
    multiply = operator.indexOf("×");
  }

  var add = operator.indexOf("+");
  console.log(add)
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    // splice(position where new element should be added, how many element should be removed, 
    // element to be added)
    //example: if 7+7, add=0 because use indexOf
    num.splice(add, 2, parseFloat(num[add]) + parseFloat(num[add + 1]));
    //splice(0,1)
    operator.splice(add, 1);
    add = operator.indexOf("+");
    console.log("add "+add)
  }

  var subtract = operator.indexOf("-");
  while (subtract != -1){
    num.splice(subtract,2,num[subtract]-num[subtract+1]);
    operator.splice(subtract,1);
    subtract = operator.indexOf("-");
  }

  console.log("result " + num)
  input.innerHTML = num;
})


reset.addEventListener('click', () =>{
  input.innerHTML = '';
})