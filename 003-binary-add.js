const binaryAdd = (numA, numB) => {
  let carry = 0;
  const out = [];
  for (let i = numA.length - 1; i >= 0; i -= 1) {
    const sum = numA[i] + numB[i] + carry;
    if (sum > 1) {
      carry = 1;
      out.unshift(sum % 2)
    } else {
      carry = 0;
      out.unshift(sum);
    }
  }
  if (carry === 1) {
    out.unshift(1);
  }
  return out;
};

// runner
const sum = binaryAdd([1, 1, 1], [1, 1, 1]);
console.log(sum);

