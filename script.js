let arr = [5, 2, 11, 15, 10];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (i < arr.length) {
    if (arr[i] % 2 == 0) {
      count++;
    }
  }
}
console.log(count);
