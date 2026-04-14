function toNumberArray(input) {
  if (typeof input === "string") {
    input = input.split(",");
  }

  return input
    .map(item => parseFloat(item))
    .filter(num => !isNaN(num));
}

// TEST
console.log(toNumberArray("1, 2"))             
console.log(toNumberArray(["1", "2"]))         
console.log(toNumberArray("11,55,33"))         
console.log(toNumberArray(["0.2", "-11", "abc23"]))