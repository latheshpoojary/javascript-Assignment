const now = new Date().getHours();
const message = now<12?"Good Morning":now<18?"good AfterNoon":"Good Evening";
console.log(message);