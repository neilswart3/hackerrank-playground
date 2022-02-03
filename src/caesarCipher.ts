function caesarCipher(s: string, k: number): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const realK = k % alphabet.length;
  let message = '';

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (letter.match(/[a-z]/gi)) {
      const isUpperCase = letter === letter.toUpperCase();
      const letterPos = alphabet.indexOf(letter.toLowerCase());
      const decryptedPos =
        letterPos + realK > 25
          ? Math.abs(letterPos + realK - alphabet.length)
          : letterPos + realK;

      const decrypted = isUpperCase
        ? alphabet[decryptedPos].toUpperCase()
        : alphabet[decryptedPos];

      message += decrypted;
      continue;
    }

    message += letter;
  }

  return message;
}

export default caesarCipher;
