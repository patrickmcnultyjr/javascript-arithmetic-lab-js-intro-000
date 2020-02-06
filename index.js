var number = 10

function add(){
  return(1 + 80);
}
function subtract(){
  return(60 - 40);
}

function multiply(){
  return(2 * 3.4);
}

function divide(){
  return(5.0 / 2.5);
}


function increment(){
  return (number++);
}

function decrement(){
  return (number--);
}

function makeInt(){
  number = parseInt('5', 10);
  return number
}
function preserveDecimal(){
  number = parseFloat(75.123, 10);
  return number;
}
