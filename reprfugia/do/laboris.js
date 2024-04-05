const originalArray = [null, null, 1, null];
const optimizedArray = originalArray.filter(item => item !== null);
console.log(optimizedArray); // Output: [1]
