
var str = "Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string."

function leetspeak(text) {
    let leet = {
        a: 4,
        e: 3,
        g: 6,
        i: 1,
        o: 0,
        s: 5,
        t: 7};
        let newText = "";
    for (char of text) {
        if (Object.keys(leet).includes(char.toLowerCase())) {
            char = leet[char].toString();
        }
        newText = newText.concat(char);
    }
    return newText
}

console.log(leetspeak(str));
