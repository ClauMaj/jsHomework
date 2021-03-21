// given a sorted array reurn a sorted array of squared nr in ascending order
let nums = [-10, -4, -2, 0, 3, 7, 10];

const square = (nums) => {
    let newArr = [];
    let left = 0; // 0 1 2 3
    let right = nums.length - 1; // 6 5 4
    let counter = 0;
    while (counter < nums.length) {
        if (nums[left] * nums[left] >= nums[right] * nums[right]) {
            newArr.push(nums[left] * nums[left] || 0)
            left++;
        }
        else {
            newArr.push(nums[right] * nums[right] || 0)
            right--;
        }
        counter++;
        console.log(newArr);
    }
    return newArr.reverse();
}
console.log(square(nums));