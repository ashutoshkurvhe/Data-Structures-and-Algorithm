// Expected Pattern

// *
// **
// ***
// ****
// ***
// **
// *

//loop one for upper part
let totalRows = 4;

for (let i = 1; i <= totalRows; i++){
    rows = "";
    for (let j = 1; j <= i; j++){
        rows += "*";
    }
    console.log(rows);
}

// loop two for lower part
for (let i = totalRows - 1; i >= 1; i--){
    rows = "";
    for (let j = i; j >= 1; j--){
        rows += "*";
    }
    console.log(rows);
}


