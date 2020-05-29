
var arr = ["abhishek","parashar","pratiksha","parashar"];
var arx = ["a","a","a","a"];
var numbers = [1,2,3,4,5];


function printReverse(arr) {
  for (var i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

var first = arx[0];

function isUniform(arx) {
  for (var i = 1; i < arx.length; i++) {
    if(arx[i] !== first){
      return false;
    }
  }
  return true;
}

function sumArray(numbers) {
  var sum =0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function max(numbers) {
  var maxi = 0;

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxi) {
      maxi = numbers[i];
    }
  }
  return maxi;
}
