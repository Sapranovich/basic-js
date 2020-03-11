module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  let mas = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (arr[i + 1] !== undefined) i++;
        break;
      case "--discard-prev":
        if (mas[0] !== undefined) mas.pop();
        break;
      case "--double-next":
        if (arr[i + 1] !== undefined) mas.push(arr[i + 1]);
        break;
      case "--double-prev":
        if (arr[i - 1] !== undefined) mas.push(arr[i - 1]);
        break;
      default:
        mas.push(arr[i]);
    }
  }
  return mas;
};
