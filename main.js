const enteredData = document.getElementById('entered-data');
const calculate = document.getElementById('calculate');
const output = document.getElementById('output');

calculate.addEventListener('click', arraSplit = () => {
  output.innerHTML = '';
  getData(enteredData.value);
});

function getData(data){
  if (data === ""){
    alert("Enter data please");
  } else {
    const arr = enteredData.value.split(' ');
    let inputArr = arr.map(Number);
    calculatePascal(inputArr);
  }
}

function outputData(triangle, arr){
  output.innerHTML = triangle[triangle.length - 1][arr.length];
}

function outputDataSecond(triangle, arr){
  let sumRepeat;
  for(let i  = 0; i < triangle.length; i++){
    sumRepeat = 0;
    for(let j = 0; j < arr.length; j++){
      if(triangle[i][j] === arr[j]){
       sumRepeat++
      }
      if(sumRepeat === arr.length){
        output.innerHTML = triangle[i][arr.length];
      }
    }
  }
}

function calculatePascal(arr){
  if(arr[0] === arr[arr.length - 1] || arr[0] !== 1){   //Перевірка чи не введено вже повний рядок або чи не введено його з помилкою
    output.innerHTML = -1;
  } else {
      let triangle = [[1], [1, 1]];
      const n = arr[1];                                 //Знаходимо кількість рядків трикутника
      for(let j = 1; j < n; j++){
        var array = [];                                          
        for(let k = 1; k <= j; k++){ 
          var nextElement = triangle[j][k-1]+triangle[j][k];
          array.push(nextElement);
        }
        array.push(1);
        array.unshift(1);
        triangle.push(array);                                     
      }
      //  outputData(triangle, arr);
      outputDataSecond(triangle, arr);
  }
}
