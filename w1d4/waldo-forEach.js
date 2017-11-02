function findWaldo(arr, found) {
  arr.forEach(function found(i, 0, arr)) {
      if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(i) {
  console.log('Found Waldo at index ' + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);