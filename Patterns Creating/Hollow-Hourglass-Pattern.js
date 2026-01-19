//Expected Pattern


// *******
//  *   *
//   * *
//    *
//   * *
//  *   *
// *******



let totalRows = 4;

for (let i = totalRows; i >= 1; i--){
    let rows = "";

    for (let j = 1; j <= totalRows - i;  j++){
        rows += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++){
        if (i === totalRows || k === 1 || k === 2 * i -1) {
            rows += "*";
        } else {
            rows += " ";
        }
    }

    console.log(rows);
}

for (let i = 2; i <= totalRows; i++){
    let rows = "";

    for (let j = 1; j <= totalRows - i;  j++){
        rows += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++){
        if (i === totalRows || k === 1 || k === 2 * i -1) {
            rows += "*";
        } else {
            rows += " ";
        }
    }

    console.log(rows);
}