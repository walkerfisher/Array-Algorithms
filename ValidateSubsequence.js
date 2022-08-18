// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

function isValidSubsequence(array, sequence) {
  let arrayIdx = 0;
  let sequenceIdx = 0;

  while (arrayIdx < array.length && sequenceIdx < sequence.length) {
    if (array[arrayIdx] === sequence[sequenceIdx]) {
      sequenceIdx++;
    }
    arrayIdx++;
  }

  return sequenceIdx === sequence.length;
}

//TEST CASES//
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
//----------//
