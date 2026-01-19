//Expected Pattern

// 1234321;
//  12321;
//   121;
//    1;
//   121;
//  12321;
// 1234321;


let totalRows = 4;
for (let i = totalRows; i >= 1; i--){
    let rows = "";
    for (let j = 1; j <= totalRows - i; j++){
        rows += " ";
    }

    for (let k = 1; k <= i; k++){
        rows += k;
    }

    for (let l = i - 1; l >= 1; l--){
        rows += l;
    }
    console.log(rows);
}

for (let i = 2; i <= totalRows; i++){
    let rows = "";
    for (let j = 1; j <= totalRows - i; j++){
        rows += " ";
    }

    for (let k = 1; k <= i; k++){
        rows += k;
    }

    for (let l = i - 1; l >= 1; l--){
        rows += l;
    }
    console.log(rows);
}