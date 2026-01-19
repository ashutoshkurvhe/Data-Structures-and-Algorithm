
let totalRows = 4;

for (let i = 1; i <= totalRows; i++){
    let rows = "";

    for (let j = 1; j <= totalRows - i; j++){
        rows += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++){
        if (k === 1 || k === 2 * i - 1 || i === totalRows) {
            rows += "1";
        } else {
            rows += " ";
        }
    }

    console.log(rows);
}