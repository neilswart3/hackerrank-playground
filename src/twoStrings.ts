'use strict';

import { WriteStream, createWriteStream } from 'fs';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function (): void {
  inputLines = inputString.split('\n');
  inputString = '';

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1: string, s2: string): string {
  const s1Constraints = s1.length >= 1 && s1.length <= 100000;
  const s2Constraints = s2.length >= 1 && s2.length <= 100000;

  if (s1Constraints && s2Constraints) {
    const s1Array = s1.split('');
    const result = s1Array.filter((char) => s2.indexOf(char) > -1);

    if (result.length > 0) {
      return 'YES';
    }
  }

  return 'NO';
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const q: number = parseInt(readLine().trim(), 10);

  for (let qItr: number = 0; qItr < q; qItr++) {
    const s1: string = readLine();

    const s2: string = readLine();

    const result: string = twoStrings(s1, s2);

    ws.write(result + '\n');
  }

  ws.end();
}

export default twoStrings;
