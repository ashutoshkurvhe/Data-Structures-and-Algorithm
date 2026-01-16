// Expected Pattern Output

// 1;
// 22;
// 333;
// 4444;

for (let i = 1; i <= 4; i++){
    let row = "";
    for (let j = 1; j <= i; j++){
        row += i;
    }
    console.log(row);
}

// i = 1 j = 1 => 1
// i = 2 j = 1 to 2 => 22
// i = 3 j = 1 to 3 => 333 
// i = 4 j = 1 to 4 => 4444