let str = "hello world";
function reverse(str) {
  if (str.length === 1) {
    return str;
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverse(str));
