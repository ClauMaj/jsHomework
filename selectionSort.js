let arr = [4, 7, 2, 9, 8];   //[0, 2, 4, 7, 9]
function selectionSort(arr){
    for(let i = 0; i< arr.length; i++){
        let smallest = i; //
        for(let j= i+ 1; j< arr.length; j++){
            if(arr[j] < arr[smallest]) {  //i:0, j:1  7< 4
                smallest = j; //4
            }
        };//end of for loop 
        if(i !== smallest){
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
        }
    }
    return arr;
}
console.log(selectionSort(arr));