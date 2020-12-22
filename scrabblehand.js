let tileHand = [
  { tile: "N", score: 1, bonus: 3 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
];
function maximumScore(tileHand) {
  let total = 0;
  for (let i = 0; i < tileHand.length; i++) {
    total += tileHand[i].score;
  }
  return total;
}

function calcScore(tileHand) {
  let total = 0;

  for (let tile of tileHand) {
      
    total += tile{"score"} ;
    if (tile.bonus != undefined) {
        total += tile.bonus;
    }
  }
  return total;
}

let total = calcScore(tileHand);
console.log(total);
