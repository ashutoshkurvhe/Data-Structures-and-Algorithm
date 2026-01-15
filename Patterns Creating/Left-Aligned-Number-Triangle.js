// Expected Output

// 1;
// 12;
// 123;
// 1234;


for (let i = 1; i <= 4; i++){
    let row = "";
    for (let j = 1; j <= i; j++){
        row += j;
    }
    console.log(row)
}

// i = 1; j = 1;

// i = 1 j = 1 => 1
// i = 2 j = 1 to 2 => 12
// i = 3 j = 1 to 3 => 123
// i = 4 j = 1 to 4 => 1234