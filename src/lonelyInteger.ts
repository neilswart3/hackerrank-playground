function lonelyInteger(a: number[]): number {
  const duplicatesArr = a.filter((item, index) => a.indexOf(item) !== index);

  const [lonelyInt] = a.filter((integer) => !duplicatesArr.includes(integer));

  return lonelyInt;
}

export default lonelyInteger;
