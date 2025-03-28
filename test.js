const isValidPhone = require("is-valid-phone-tr");

console.log(isValidPhone("05551234567"));     // true
console.log(isValidPhone("+905551234567"));   // true
console.log(isValidPhone("5551234567"));      // true
console.log(isValidPhone("123456"));          // false
