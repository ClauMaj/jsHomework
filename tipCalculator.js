
var billAmount = 200;
var levelOfService = "fair";

// SWITCH

function tipAmount(bill,service){
    switch (service) {
        case "good":
            var n = 20;
            break;
        case "fair":
            var n = 15;
            break;
        case "bad":
            var n= 10;
            break;
    }
    var tip = bill*n/100;
    return tip;
}

// ELSE IF

// function tipAmount(bill,service){
//     if (service == "good") {
//         var n = 20;
//     }
//     else if (service == "fair") {
//         var n = 15;
//     }
//     else if (service == "bad") {
//         var n = 10;
//     }
//     var tip = bill*n/100;
//     return tip;
// }
console.log(`Tip: ${tipAmount(billAmount,levelOfService)}`);


function totalAmount(bill,service) {
    var total = bill + tipAmount(bill,service);
    return total
}

console.log(`Total: ${totalAmount(billAmount,levelOfService)}`);