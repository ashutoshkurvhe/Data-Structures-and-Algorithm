// Pattern #2 – Inverted Right-Angled Triangle

for (let i = 4; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}


// Output:

// ****
// ***
// **
// *
