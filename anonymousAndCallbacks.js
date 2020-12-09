//Positive Numbers
//Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

var arr = [1 ,4 ,-4, 3, -10, 5, 8, 3, -5, 14, 28, 24];

var posArr = arr.filter(function(item){
    return item > 0;
});
console.log("Positive Numbers");
console.log(posArr);

//Even Numbers
//Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

var evenArr = arr.filter(function(item){
    if (item > 0) {
        return item % 2 === 0;
    };
});
// evenArr = posArr.filter(function(item){
//         return item % 2 === 0;
// });
console.log("Even Numbers");
console.log(evenArr);

//Square the Numbers
//Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9]

var squareTheNumbers = arr.map(function(item){
    return item * item;
});

console.log("Square the Numbers");
console.log(squareTheNumbers);

//Write a function which takes an array of city objects like such:
//as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

var cities = [
{ name: 'Los Angeles', temperature: 60.0},
{ name: 'Atlanta', temperature: 52.0 },
{ name: 'Detroit', temperature: 48.0 },
{ name: 'New York', temperature: 80.0 } ];

var cooler = [] 
cities.filter(function(obj){
    if (obj.temperature < 70){
        cooler.push(obj.name);
    };
});

console.log("Cooler");
console.log(cooler);

//Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names

var cityNames = cities.map(function(obj){
    return obj.name;
});
console.log("City names");
console.log(cityNames);


// Print out 'Good Job, !' for each person's name, one on a line.
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

people.forEach(function(item){
    console.log(`Good job, ${item}!`);
});

//Sort an array
//Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.

people.sort();
console.log("Sorted  Alphabetical");
console.log(people);

//Sort an array, 2
//Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

var sortByLength = people.sort(function(item1, item2){
    return item1.length - item2.length;
});

console.log("Sorted by length");
console.log(sortByLength);

//Given an array of array of numbers like:
//Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:
var arrArr = [[100,14,15,16],[1, 3, 4],[2, 4, 6, 8],[3, 6]];

// calculate the sum of each innerArray and store the values in a dictionary sum = key / innerArray = value
var store = {};
arrArr.forEach(function(item){
    let sum = 0;
    for (let i=0;i<item.length;i++){
        sum += item[i];
    };
    return store[sum] = item;
});

//sort ascending by keys
sortedKeys = Object.keys(store).sort(function(item1, item2){
    return item1 - item2;
});

sortedKeys.forEach(function(item,index){
    arrArr[index] = store[item];
});

console.log("Sorted array of arrays");
console.log(arrArr);

//Given this function:
//Use the call3Times function to print "Hello, world!" 3 times.
function fun(){
    console.log('Hello, world!');
};
function call3Times(fun) { 
    fun();
    fun(); 
    fun();
};
console.log("\nCall 3 times");

call3Times(fun);

//n times
//You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times

var callNTimes = (fun, n) => {
    for (let i=0 ; i<n ; i++){
        fun();
    };
};
console.log("\nCall N times");
callNTimes(fun, 5);

//Sum an array
//Write a function sum that takes an array of numbers as argument and returns the sum //of those numbers. Use the reduce method to do this.

var sumArray = arr.reduce(function(total,curr){
    return total + curr;
});

console.log("\nSum Array");
console.log(sumArray);

//Acronym
//Write a function acronym that takes an array of words as argument and returns the 
//acronym of the words. Use the reduce method to do this.

var words = ['very', 'important', 'person'];

// var acronym = words.forEach

function acronym(array){
    acro = '';
    array.forEach(function(item){
        acro += item.charAt(0).toUpperCase();
    });
    return acro;
};

console.log("\nAcronym");
console.log(acronym(words));