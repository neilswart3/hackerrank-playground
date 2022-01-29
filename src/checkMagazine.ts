'use strict';

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
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine: string[], note: string[]): void {
  const magazineArray = [...magazine];

  for (let i = 0; i < note.length; i++) {
    const includesWord = magazineArray.includes(note[i]);

    if (includesWord) {
      const magNoteIndex = magazineArray.indexOf(note[i]);

      magazineArray.splice(magNoteIndex, 1);
      continue;
    }

    console.log('No');
    return;
  }

  console.log('Yes');
}

function main() {
  const firstMultipleInput: string[] = readLine()
    .replace(/\s+$/g, '')
    .split(' ');

  const m: number = parseInt(firstMultipleInput[0], 10);

  const n: number = parseInt(firstMultipleInput[1], 10);

  const magazine: string[] = readLine().replace(/\s+$/g, '').split(' ');

  const note: string[] = readLine().replace(/\s+$/g, '').split(' ');

  checkMagazine(magazine, note);
}

export default checkMagazine;
