// Eexpected Output

//    *
//   * *
//  *   *
// *******

let totalRows = 4;

for (let i = 1; i <= totalRows; i++) {
  let row = "";

  // left spaces
  for (let j = 1; j <= totalRows - i; j++) {
    row += " ";
  }

  // stars + inner spaces
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (
      i === 1 || // top row
      i === totalRows || // bottom row
      k === 1 || // left boundary
      k === 2 * i - 1 // right boundary
    ) {
      row += "*";
    } else {
      row += " ";
    }
  }

  console.log(row);
}
