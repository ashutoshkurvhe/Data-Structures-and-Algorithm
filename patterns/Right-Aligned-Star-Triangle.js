// Pattern #6 – Right-Aligned Star Triangle (Spaces + Stars)


for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let s = 1; s <= 4 - i; s++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// Output:

//    *
//   **
//  ***
// ****
