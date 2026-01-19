//Expected Pattern

//     *
//    * *
//   *   *
//  *     *
// *********

let totalRows = 5;

for (let i = 1; i <= totalRows; i++){
    let rows = "";
    for (let j = 1; j <= totalRows - i; j++){
        rows += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++){
        if (i === 1 || i === totalRows || k === 1 || k === 2 * i - 1) {
            rows += "*"
        } else {
            rows += " "
        }
    }
    console.log(rows)
}