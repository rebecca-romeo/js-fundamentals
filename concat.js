function concat(array1, array2) {
  let locationData = [];
  for (let i = 0; i < array1.length; i++) {
    locationData.push(array1[i])
  }
  for (let i = 0; i < array2.length; i++) {
    locationData.push(array2[i])
  }
  

  return locationData;
}


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]))
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));