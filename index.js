// const num1 = Number(prompt("enter your first number"));
// const num2 = Number(prompt("enter your second number"));
// const num3 = Number(prompt("enter your third number"));

// function finalResult() {
//   document.write("Addition is" + (num1 + num2 + num3) + "<br />");
//   document.write("Subtraction is" + (num1 - num2 - num3) + "<br/>");
//   document.write("Multiplication is" + num1 * num2 * num3 + "<br/>");
//   document.write("Division is" + num1 / num2 / num3 + "<br />");
// }
// finalResult();

//Argument set in parameter

const first = Number(prompt("Enter your first number"));
const second = Number(prompt("Enter your secound number"));
const third = Number(prompt("Enter your third number"));
function resultFun(num1, num2, num3) {
  document.write("<br/>" + "Enter Addition" + (num1 + num2 + num3));
  document.write("<br/>" + "Enter subtraction" + (num1 - num2 - num3));
  document.write("<br/>" + "Enter Multiplication" + num1 * num2 * num3);
  document.write("<br/>" + "Enter Division" + num1 / num2 / num3);
}

resultFun(first, second, third);
