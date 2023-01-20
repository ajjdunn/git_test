// let input = prompt("Please enter a number greater than 100");

// while (input <= "100") {
//   prompt("Incorrect. Please enter again");
// }
// {
//   alert("Thank you");
// }
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
