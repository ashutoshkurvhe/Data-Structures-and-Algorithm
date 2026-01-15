// Expected Pattern Output

//    *
//   ***
//  *****
// *******

for (let i = 1; i <= 4; i++){
    let row = "";
    for (let j = 4; j > i; j--){
        row += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++){
        row += "*";
    }
    console.log(row);
}

// i = 1 j = 4 to 1 => "   "; k = 1 to 1 => "*"
// i = 2 j = 4 to 2 => "  "; k = 1 to 3 => "***"
// i = 3 j = 4 to 3 => " "; k = 1 to 5 => "*****"
// i = 4 j = 4 to 4 => ""; k = 1 to 7 => "*******"
