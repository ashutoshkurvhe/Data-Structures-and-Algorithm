// Pattern #8 – Number Triangle (Row Number with Space)

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i + " ";
  }
  console.log(row);
}

// Output:

// 1
// 2 2
// 3 3 3
// 4 4 4 4
