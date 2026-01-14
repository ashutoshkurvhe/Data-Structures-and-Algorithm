//Expected Output

// 1;
// 23;
// 456;
// 78910;

let count = 1;

for (let i = 1; i <= 4; i++){
    let row = "";
    for (let j = 1; j <= i; j++){
        row += count;
        count++
    }
    console.log(row);
}

// i = 1; j = 1; count = 1;

// i = 1 j = 1 => 1
// i = 1 j = 1 to 2 => 23
// i = 1 j = 1 to 3 => 456
// i = 1 j = 1 to 4 => 78910