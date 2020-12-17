function range(from, to) {
    let range=[];
    for (let i = from; i< to +1; ++i) {
        range.push(i);
    }
    return range;
    }
    function sum(arr) {
        let total = 0;
        for (let val of arr){
            total += val;
        }
        return total;
    }
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55
