export default function printMe() {
    console.log('I get called from print.js!');
}

let a = 111;
let b = 222;
var xxx = (c,d) => c*d;
console.log(xxx(a,b));

console.log(window.jQuery);