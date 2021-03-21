const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// use forEach to print only name start end (a for loop, does not modify original)
companies.forEach(function (item) {
    console.log(item.name, item.start, item.end);
});

// new array with just names use map (return new array - not modify original)
var cNames = companies.map(function (item) {
    return item['name'];
});
console.log(cNames);

// new array to show star > 1990 use filter
var filter90 = companies.filter(function (item) {
    return item['start'] > 1990;
});
console.log(filter90);

//reduced function

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

var reduce = ages.reduce(function (accumulator, currentVal) {
    return accumulator + currentVal;
})

console.log(reduce);