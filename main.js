const enteredData = document.getElementById('entered-data');
const calculate = document.getElementById('calculate');
const output = document.getElementById('output');

function fact(n) { //Знаходить n!
  if (n == 0){
    return 1;
  }
  return (n != 1) ? n * fact(n - 1) : 1;
}
    
function calculatePascal(arr){
  alert('boom');
  //const arr = [1, 6, 15, 20];
  if(arr[0] === arr[arr.length - 1] || arr[0] !== 1){
    alert("It's full row");
    output.innerHTML = -1;
  } else {
  const n = arr[1];
  const k = arr.length;
  console.log(k);
  let nextPasc = fact(n)/(fact(k)*fact(n-k));
  console.log(nextPasc);
  output.innerHTML = nextPasc;
  }
}


calculate.addEventListener('click', arraySplit = () => {
  output.innerHTML = '';
  if (enteredData.value === ""){
    alert("Enter data please");
  } else {
    const arr = enteredData.value.split(' ');
    let arrN = arr.map(Number);
    console.dir(arrN);
    calculatePascal(arrN);
  }
});