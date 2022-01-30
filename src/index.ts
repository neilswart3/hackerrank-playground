// import sockMerchant from './sockMerchant';
// import countingValleys from './countingValleys';
// import jumpingOnClouds from './jumpingOnClouds';
// import repeatedString from './repeatedString';

// import hourglassSum from './hourglassSum';
// import rotLeft from './rotLeft';
// import minimumBribes from './minimumBribes';

// import checkMagazine from './checkMagazine';
// import twoStrings from './twoStrings';
// import sherlockAndAnagrams from './sherlockAndAnagrams';
// import countSwaps from './countSwaps';

// const socksTest1 = sockMerchant(7, [1, 2, 1, 2, 1, 3, 2, 4]);
// const socksTest2 = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

// console.log('socksTest1:', socksTest1);
// console.log('socksTest2:', socksTest2);

// const valleysTest1 = countingValleys(8, 'UDDDUDUU');
// const valleysTest2 = countingValleys(12, 'DDUUDDUDUUUD');

// console.log('valleysTest1:', valleysTest1);
// console.log('valleysTest2:', valleysTest2);

// const jumpingTest1 = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
// const jumpingTest2 = jumpingOnClouds([0, 0, 0, 1, 0, 0]);

// console.log('jumpingTest1:', jumpingTest1);
// console.log('jumpingTest2:', jumpingTest2);

// const test1 = repeatedString('aba', 10);
// const test2 = repeatedString('a', 1000000000000);

// console.log('test1:', test1);
// console.log('test2:', test2);

// const hourglassTest1 = hourglassSum([
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ]);
// const hourglassTest2 = hourglassSum([
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 9, 2, -4, -4, 0],
//   [0, 0, 0, -2, 0, 0],
//   [0, 0, -1, -2, -4],
// ]);
// const hourglassTest3 = hourglassSum([
//   [-1, 1, -1, 0, 0, 0],
//   [0, -1, 0, 0, 0, 0],
//   [-1, -1, -1, 0, 0, 0],
//   [0, -9, 2, -4, -4, 0],
//   [-7, 0, 0, -2, 0, 0],
//   [0, 0, -1, -2, -4, 0],
// ]);

// console.log('hourglassTest1:', hourglassTest1);
// console.log('hourglassTest2:', hourglassTest2);
// console.log('hourglassTest3:', hourglassTest3);

// const rotLeftTest1 = rotLeft([1, 2, 3, 4, 5], 4);

// minimumBribes([2, 1, 5, 3, 4]);
// minimumBribes([2, 5, 1, 3, 4]);

// minimumBribes([2, 5, 1, 4, 3]);
// minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

// checkMagazine(
//   ['give', 'me', 'one', 'grand', 'today', 'night'],
//   ['give', 'one', 'grand', 'today']
// );

// checkMagazine(
//   ['two', 'times', 'three', 'is', 'not', 'four'],
//   ['two', 'times', 'two', 'is', 'four']
// );

// checkMagazine(
//   ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],
//   ['ive', 'got', 'some', 'coconuts']
// );

// const twoStringsTest1 = twoStrings('hello', 'world');
// const twoStringsTest2 = twoStrings('hi', 'world');

// console.log('twoStringsTest1:', twoStringsTest1);
// console.log('twoStringsTest2:', twoStringsTest2);

// const anagramTest1 = sherlockAndAnagrams()

// countSwaps([1, 2, 3]);
// const countSwapsTest2 = countSwaps([3, 2, 1]);

// import fizzBuzz from './fizzBuzz';

// fizzBuzz(15);

// import findMedian from './findMedian';

// const test1 = findMedian([0, 1, 2, 4, 6, 5, 3]);

// console.log('test1:', test1);

// import plusMinus from './plusMinus';

// plusMinus([-4, 3, -9, 0, 4, 1]);

// import minMaxSum from './minMaxSum';

// // minMaxSum([1, 3, 5, 7, 9]);
// // minMaxSum([1, 2, 3, 4, 5]);
// minMaxSum([7, 69, 2, 221, 8974]);

// import timeConversion from './timeConversion';

// const timeTest1 = timeConversion('12:01:00PM');
// const timeTest2 = timeConversion('07:05:45PM');

// import lonelyInteger from './lonelyInteger';

// lonelyInteger([1, 2, 3, 4, 3, 2, 1]);

import diagonalDifference from './diagonalDifference';

const diagDiffTest1 = diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);
console.log('diagDiffTest1:', diagDiffTest1);

const diagDiffTest2 = diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);

console.log('diagDiffTest2:', diagDiffTest2);
