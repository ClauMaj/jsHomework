let word = "aabbcccb";
let k = 3;

const deleteChars = (word, k) => {
    let wordArr = word.split('');
    let count = 0;
    let i = 0;
    let trackChar = '';
    while (i < wordArr.length) {
        console.log('tempArr ' + wordArr);
        if (count === 0) {
            trackChar = wordArr[i];
            count++;
            i++;
        }
        else {
            if (wordArr[i] === trackChar) {
                count++;
                i++;
            }
            else {
                trackChar = wordArr[i];
                count = 1;
                i++;
            }
        }
        if (count === k) {
            console.log("count " + count);
            wordArr.splice(i - k, k)
            count = 0;
            i = 0;
        }
    }
    let newChar = wordArr.join('');
    return newChar
}

console.log(deleteChars(word, k));
