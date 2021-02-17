// Algorithm Challenge 1:
// Without using .flat(), create a function to flatten an array 
const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10]
// flatten(exampleArray) //[1,2,3,4,5,6,7,8,9,10]

// var tempArray = [];
// var tempIndex = 0;
// function flatten(exampleArray){
//     exampleArray.forEach(function(item,index){
//         if (Array.isArray(item))  {
//                 flatten(item);
//         }
//         else {
//             tempArray[tempIndex] = item;
//             tempIndex +=1;
//         }
//     });
//     return tempArray;
// };
// console.log(flatten(exampleArray));

// Algorithm Challenge 2 
// Product Sum 
// Write a function that takes in a "special" array and returns its product sum.
// A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of a "special" array its element,where "special" arrays inside it re summed themselves and then multiplied by their level of depth.
// The depth of a "special" array is how far nested it is.  For instance, the depth of [] is 1; the depth of the inner array in [[]] is 2. The depth of the innermost array in [[[]]] is 3.
// Therefore, the product sum mof [x, y] is x + y; the product sum of [x, [y, z]] is x + 2 * (y + z);  the product sum of [x, [y, [z]]] is x + 2 * (y + 3z)
// Sample input
// array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// Sample Output
// 12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)

// Given an array nums. We define a running sum of an 
// array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Example 1
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].




let nums = [1,2,3,4];


const runingSum = (arr) => {
    let track = 0;
    let newArr = [];
    arr.forEach( el => {
        track += el;
        newArr.push(track)
    })
    return newArr;
}

console.log(runingSum);



// Example 2
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].