export const shortenLongString = (string: string, length: number) => {
  if (string.length < length) return string;
  else return `${string.slice(0, length)} ...`;
};
