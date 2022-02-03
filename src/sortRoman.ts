interface NamesObj {
  name: string;
  romanNum: string;
  decNum: number;
}

function sortRoman(names: string[]) {
  const numsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
  };

  let namesArr: NamesObj[] = [];

  for (let i = 0; i < names.length; i++) {
    const [name, number] = names[i].split(' ');
    const numberConvert = number.split('').map((num) => numsMap[num]);

    let total = 0;
    for (let j = 0; j < numberConvert.length; j++) {
      const next = numberConvert[j + 1];
      const current = numberConvert[j];

      if (!next) {
        total += current;
      } else if (current >= next) {
        total += current;
      } else if (current < next) {
        total -= current;
      }
    }

    namesArr = [
      ...namesArr,
      {
        name,
        romanNum: number,
        decNum: total,
      },
    ];
  }

  const sortedNamesArr = [...namesArr].sort((a, b) => {
    if (a.name === b.name) {
      return a.decNum < b.decNum ? -1 : 1;
    }

    return a.name < b.name ? -1 : 1;
  });

  const resultNamesArr = sortedNamesArr.map(
    ({ name, romanNum }) => `${name} ${romanNum}`
  );

  return resultNamesArr;
}

export default sortRoman;
