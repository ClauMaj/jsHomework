
var str = "Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string."

function leetspeak(text) {
    let chars = {
        a: 4,
        e: 3,
        g: 6,
        i: 1,
        o: 0,
        s: 5,
        t: 7};
        let newText = "";
    for (let i = 0;i< text.length; i++) {
        let b = text[i];
        if (Object.keys(chars).includes(text[i].toLowerCase())) {
            b = chars[text[i]].toString();
        }
        newText = newText.concat(b);
    }
    return newText
}

console.log(leetspeak(str));