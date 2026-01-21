// Binary Triangle Pattern

let totalRows = 4;

for (let i = 1; i <= totalRows; i++) {
  let rows = "";
  for (let j = 1; j <= i; j++) {
    if ((i + j) % 2 === 0) {
      rows += 1;
    } else {
      rows += 0;
    }
  }
  console.log(rows);
}

//Expected Pattern

// 1;
// 01;
// 101;
// 0101;
