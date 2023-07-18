function compareValues(a, b) {
    // Helper function to compare values for sorting
    if (typeof a === "number" && typeof b === "number") {
      return a-b;
    } else if (typeof a === "number") {
      return -1;
    } else if (typeof b === "number") {
      return 1;
    } else {
      return a.localCompare(b);
    }
  }
  
  function sortNumbersAndCharacters(arr) {
    // Helper function to sort numbers and characters separately within each subarray
    let numbers = arr.filter((item) => typeof item === "number");
    let Characters = arr.filter((item) => typeof item === "string");
  
    numbers.sort((a,b) => a-b);
    Characters.sort();
  
    let sortedArr = [];
    let numIndex = 0;
    let charIndex = 0;
  
    for (let item of arr) {
      if (typeof item === "number") {
        sortedArr.push(numbers[numIndex]);
        numIndex++;
      } else {
        sortedArr.push(Characters[charIndex]);
        charIndex++;
      }
    }
  
    return sortedArr;
  }
  
  function numbersThenCharacters(inputArray) {
    // Main function to arrange the array in the required order
    return inputArray.map((subArray) => sortNumbersAndCharacters(subArray));
  }
  
  // Test the function with the provided input
  const input = [
    [11, 12, 24, 23, "a", "b"],
    [56, "c", 45],
    [67, "d"],
    ["f", "e", 78]
  ];
  
  const output = numbersThenCharacters(input);
  console.log(output);