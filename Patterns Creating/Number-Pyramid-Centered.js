// Expected Pattern

//      1;
//     121;
//    12321;
//   1234321;


let totalRows = 4;

for (let i = 1; i <= totalRows; i++){
    let rows = "";
    for (let j = 1; j <= totalRows - i; j++){
        rows += " ";
    }

    for (let k = 1; k <= i; k++){
        rows += k
    }

    for (let l = i - 1; l >= 1; l--){
        rows += l
    }
    console.log(rows)
}