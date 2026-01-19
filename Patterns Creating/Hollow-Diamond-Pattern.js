//Expected Pattern

//     *
//    * *
//   *   *
//  *     *
//   *   *
//    * *
//     *


let totalRows = 4;

for (let i = 1; i <= totalRows; i++) {
  let rows = "";
  for (let j = 1; j <= totalRows - i; j++) {
    rows += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    if (i === 1 || k === 1 || k === 2 * i - 1) {
      rows += "*";
    } else {
      rows += " ";
    }
  }
  console.log(rows);
}

for (let i = totalRows - 1; i >= 1; i--) {
  let rows = "";
  for (let j = totalRows - i; j >= 1; j--) {
    rows += " ";
  }

  for (let k = 2 * i - 1; k >= 1; k--) {
    if (i === 1 || k === 1 || k === 2 * i - 1) {
      rows += "*";
    } else {
      rows += " ";
    }
  }
  console.log(rows);
}
