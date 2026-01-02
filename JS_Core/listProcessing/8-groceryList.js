function buyFruit(arr) {
  let groceryBag = [];

  arr.forEach(innerArr => {
    for (let i = 0; i < innerArr[1]; i++) {
      groceryBag.push(innerArr[0]);
    }
  });

  return groceryBag;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]