import sockMerchant from './sockMerchant';
import countingValleys from './countingValleys';
import jumpingOnClouds from './jumpingOnClouds';
import repeatedString from './repeatedString';

import hourglassSum from './hourglassSum';

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

const hourglassTest1 = hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]);
