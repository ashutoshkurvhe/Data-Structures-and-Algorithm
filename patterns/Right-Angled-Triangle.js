// Pattern #1 – Right-Angled Triangle (Increasing Stars)

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}


// Output:

// *
// **
// ***
// ****
