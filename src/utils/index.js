// make number to min 3 digit
const Threedigit = (value) => {
  const result = value <= 9 ? "00" + value : value <= 100 ? "0" + value : value;
  return result;
};

export { Threedigit };
