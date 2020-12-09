

var body = document.querySelector('body');
var calc = document.querySelector('#calc');

calc.addEventListener('click',(e) => {
    console.log(e);
    
    console.log(e.target.innerText);
})