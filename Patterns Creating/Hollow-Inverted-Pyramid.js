// Expected Pattern

// *********
//  *     *
//   *   *
//    * *
//     *



// let totalRows = 5;
// for (let i = totalRows; i >= 1; i--){
//     let rows = "";
//     for (let j = totalRows - i; j >= 1; j--){
//         rows += " ";
//     }

//     for (let k = 2 * i - 1; k >= 1; k--){
//         if (i === 1 || i === totalRows || k === 1 || k === 2 * i - 1) {
//             rows += "*";
//         } else {
//             rows += " ";
//         }
//     }
//     console.log(rows)
// }


let totalRows = 5;

for (let i = totalRows; i >= 1; i--) {
  let row = "";

  // spaces
  for (let j = 1; j <= totalRows - i; j++) {
    row += " ";
  }

  // stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (
      i === totalRows || // top row
      i === 1 || // last row
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


