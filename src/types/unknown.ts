function multiplyByTwo(number: unknown) {
  if (typeof number === "number") {
    return number * 2;
  }
  return "Please provide a valid number";
}

console.log(multiplyByTwo(2));
console.log(multiplyByTwo("John"));
