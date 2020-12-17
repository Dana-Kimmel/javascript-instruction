
function countBs (string) {
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if (string[i] == "B") {
            count++;
        }
    }

    return count;
}
console.log(countBs("BBC"));

function countChar(string, ch) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      count += 1;
    }
  }
  return count;
}
console.log(countChar("kakkerlak", "a"));