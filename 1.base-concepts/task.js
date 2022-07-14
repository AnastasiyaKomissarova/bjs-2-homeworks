"use strict";

function solveEquation(a, b, c) {
  let arr;
  let d = b ** 2 - 4 * a * c;
  let root1;
  let root2;

  if (d > 0) {
    root1 = (-b + Math.sqrt(d) ) / (2 * a);
    root2 = (-b - Math.sqrt(d) ) / (2 * a);
    arr = [root1, root2];
  }
  else if (d === 0) {
    root1 = -b / (2 * a);
    arr = [root1];
  }
  else if (d < 0) {
    arr = [];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
