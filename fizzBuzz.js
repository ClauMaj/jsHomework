for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}

// switch
for (let i = 1; i < 100; i++) {
    let output = "";
    switch (true) {
        case (i % 3 === 0 && i % 5 === 0):
            output += "FizzBuzz";
            break;
        case (i % 3 === 0):
            output += "Fizz";
            break;
        case (i % 5 === 0):
            output += "Buzz";
            break;
        default:
            output = i;
    }
    console.log(output);
}