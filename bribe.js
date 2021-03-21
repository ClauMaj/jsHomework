let array1 = [1, 2, 3, 5, 4]
let array2 = [2, 5, 1, 3, 4]
let array3 = [1, 2, 3, 4, 5]



const choas = (arr) => {
    // store results
    bribes = 0;
    chaos = '';
    // itearet
    for (let i = 0; i < arr.length; i++) {
        // this checks if the number doesn't match and only when it moved forward
        if (arr[i] > i + 1) {
            // store how many times the bribe happened
            bribes += arr[i] - (i + 1)
            // checks if bribe moved more than 2 spaces
            if ((arr[i] - (i + 1)) > 2) {
                chaos = "too choatic"
            }
        }
    }
    return `bribes: ${chaos || bribes || "no bribes"}`
}

console.log(choas(array1))