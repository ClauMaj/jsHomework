
function longLong(word){
    let vowels = ['a','e','i','o','u']
    let newWord = ''
    let prevChar = ''
    for (let char of word){
        if (char.toLowerCase() === prevChar && vowels.includes(char)){
            newWord = newWord + char.repeat(4)
        } else {
            newWord = newWord + char
        }
        prevChar = char.toLowerCase()
    }
    return newWord
}
console.log(longLong('Cheese'))