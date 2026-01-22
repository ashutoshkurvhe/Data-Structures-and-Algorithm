// Plus Star Pattern


let totalRows = 5;

for (let i = 1; i <= totalRows; i++){
    let rows = "";

    for (let j = 1; j <= totalRows; j++) {
        if (i === Math.ceil(totalRows / 2) || j === Math.ceil(totalRows / 2)) {
            rows += "*";
        } else {
            rows += " ";
        }
    }
    console.log(rows);
}

//Expected Pattern


//    1;
//   121;
//  12321;
// 1234321;