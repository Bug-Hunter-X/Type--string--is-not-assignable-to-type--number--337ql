function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addStrings(a: string, b: string): number {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Handle cases where strings are not numbers
  }

  return numA + numB; //return number
}

function subtractStrings(a: string, b: string): number {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Handle cases where strings are not numbers
  }
  return numA - numB; //return number
}

let result1 = add(5, 3); // 8
let result2 = subtract(10, 5); // 5
let result3 = addStrings("5", "3"); // 8
let result4 = subtractStrings("10", "5"); //5

console.log(result1); // 8
console.log(result2); // 5
console.log(result3); // 8
console.log(result4); // 5