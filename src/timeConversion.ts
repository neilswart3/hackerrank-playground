function timeConversion(s: string): string {
  const a = !!s.match(/AM/g) ? 'AM' : 'PM';
  const [h, min, sec] = s.slice(0, -2).split(':');
  const hr = parseInt(h);

  if (hr === 12) {
    if (a === 'PM') {
      return `${hr.toString()}:${min}:${sec}`;
    } else {
      return `00:${min}:${sec}`;
    }
  }

  if (a === 'PM') {
    return `${(hr + 12).toString()}:${min}:${sec}`;
  }

  return `${h}:${min}:${sec}`;
}

export default timeConversion;
