//Expected Patterns

// *****
// *   *
// *****
// *   *
// *****


let totalRows = 5;

for (let i = 1; i <= totalRows; i++) {
  let row = "";

  for (let j = 1; j <= totalRows; j++) {
    if (
      i === 1 || // top
      i === totalRows || // bottom
      j === 1 || // left
      j === totalRows || // right
      i === Math.ceil(totalRows / 2) // middle row
    ) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}





//Wrong way hard coded i === totalRows - 2
// let totalRows = 5;
// for (let i = 1; i <= totalRows; i++){
//     let rows = "";
//     for (let j = 1; j <= totalRows; j++){
//         if (i === 1 || i === totalRows || i === totalRows - 2 || j === 1 || j === totalRows) {
//             rows += "*";
//         } else {
//             rows += " "
//         }

//     }
//     console.log(rows)
// }


