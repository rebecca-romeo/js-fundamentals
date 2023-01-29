const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

let speed = 50;


function carPassing(cars, speed) {
  let addCar = {
    time: Date.now(),
    speed: speed
  };
  cars.push(addCar)
  return cars
}
console.log(carPassing(cars, speed))