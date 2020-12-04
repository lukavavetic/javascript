console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// from ES 2020 - big int 
console.log(484894849489498448449489494984984n);
console.log(BigInt(484894849489498448449489494984984));

const huge = 4324324234254353n;
const num = 23;
console.log(huge + num); // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions