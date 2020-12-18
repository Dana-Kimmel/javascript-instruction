

 function findMax(arr) {
      let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
}

var nums = [1,2,3,4];
console.log(findMax(nums));

function maxOfArray(array) {
    return Math.max.apply(Math, array);
  }
  
  
  let array = [1,2,3,4,5,6];
  console.log(maxOfArray(array));
 
function findMaximum(arr) {
   return arr.reduce(function (p, v) {
     return ( p > v ? p : v );
   });
  }

  let arrayNums = [10,5,23,46,1];
  console.log(findMaximum(arrayNums));
