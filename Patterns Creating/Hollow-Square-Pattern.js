// Hollow Square Pattern


let totalRows = 4;

for (let i = 1; i <= totalRows; i++){
    let rows = "";
    for (let j = 1; j <= totalRows; j++){
        if (i === 1 || i === totalRows || j === 1 || j === totalRows) {
            rows += "*";
        } else {
            rows += " ";
        }
    }
    console.log(rows);
}



//Expected Pattern

// ****
// *  *
// *  *
// ****