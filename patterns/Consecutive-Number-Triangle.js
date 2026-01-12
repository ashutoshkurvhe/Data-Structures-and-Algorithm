// Pattern #10 – Consecutive Number Triangle Code

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i + j - 1;
  }
  console.log(row);
}

// Output

// 1
// 23
// 345
// 4567