function compareValues(a, b) {
  
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
    [11, 26, 45.4, "f", "a", "b"],
    [0], [1.5, "d","X",35,"s"],
    ["f", "e", 58],
    ["p","Y","Z"],
    [98,72]
  ];
  const output = numbersThenCharacters(input);
  console.log(output);