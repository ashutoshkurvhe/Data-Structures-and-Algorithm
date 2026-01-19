//Excepted Pattern

// *   *   *
//  * * * *
//   *   *


let rows = 3;
let cols = 9;

for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= cols; j++) {
    if ((i + j) % 4 === 0 || (i === 2 && j % 4 === 0)) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
