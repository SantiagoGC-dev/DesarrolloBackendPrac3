// Exercise 1
let firstName = "Olivia";
let lastName = "Rodrigo";
let country = "USA";
let city = "California";
let age = 21;
let isMarried = false;
let year = 2024;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

// Exercise 2
console.log("10" === 10); // false

// Exercise 3
console.log(("9.8") === 10); // false

// Exercise 4
// Truthy values
console.log(Boolean(1)); // true
console.log(Boolean("Hi")); // true
console.log(Boolean(true)); // true

// Falsy values
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(false)); // false

// Exercise 5 - Comparison without console.log
4 > 3; // true
4 >= 3; // true
4 < 3; // false
4 <= 3; // false
4 == 4; // true
4 === 4; // true
4 != 4; // false
4 !== 4; // false
4 != "4"; // false
4 == "4"; // true
4 === "4"; // false

// Exercise 6 - Date object
const now = new Date();
console.log("Year:", now.getFullYear()); // current year
console.log("Month:", now.getMonth() + 1); // current month (0-11)
console.log("Date:", now.getDate()); // current date
console.log("Day:", now.getDay()); // current day of the week (0-6)
console.log("Hours:", now.getHours()); // current hour
console.log("Minutes:", now.getMinutes()); // current minute
console.log("Seconds since January 1, 1970:", parseInt(now.getTime() / 1000)); // total seconds since 1970 y parseInt() devulve valores de decimal a entero


// Exercise 7 - Triangle Area
let base = parseFloat(prompt("Enter base:"));
let height = parseFloat(prompt("Enter height:"));
area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);


// Exercise 8 - Triangle Perimeter
let sideA = parseFloat(prompt("Enter side a of the triangle: "));
let sideB = parseFloat(prompt("Enter side b of the triangle: "));
let sideC = parseFloat(prompt("Enter side c of the triangle: "));
let perimeter = sideA + sideB + sideC;
console.log(`The perimeter of the triangle is ${perimeter}`); 