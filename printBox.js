
function printBox(x,y) {
    console.log(` ${"-".repeat(x)} `);
    var i = 1;
    while (i <= (y-2)) {
        console.log(`|${" ".repeat(x)}|`);
        i++;
    }
    console.log(` ${"-".repeat(x)} `);
}

printBox(20,10);