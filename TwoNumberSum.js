// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.

function twoNumberSum(array, targetSum) {
  const numbers = {};

  for (const number of array) {
    const potentialMatch = targetSum - number;
    if (potentialMatch in numbers) {
      return [potentialMatch, number];
    } else {
      numbers[number] = true;
    }
  }
  return [];
}

//TEST CASES//
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSum([4, 6], 10));
console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163));
//----------//
