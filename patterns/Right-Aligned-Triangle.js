// Pattern #7 – Right-Aligned Triangle (If-Else Logic)

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    if (j <= 4 - i) row += " ";
    else row += "*";
  }
  console.log(row);
}
 
// Output:

//    *
//   **
//  ***
// ****
