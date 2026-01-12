// Pattern #5 – Number Triangle (1 to Row)

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}

// Output:

// 1;
// 12;
// 123;
// 1234;
