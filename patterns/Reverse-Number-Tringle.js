// Pattern #9 – Reverse Number Triangle

for (let i = 4; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}

// Output;

// 1234;
// 123;
// 12;
// 1;