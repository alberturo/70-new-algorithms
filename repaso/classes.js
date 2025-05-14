class Car {
  constructor(model, speed, year) {
    this.model = model;
    this.speed = speed;
    this.year = year;
  }
  speedUp() {
    this.speed += 1;
  }
  speedDown() {
    this.speed -= 1;
  }
}

let car1 = new Car("BMW", 200, 2017);
let car2 = new Car("Audi", 100, 2018);
let car3 = new Car("Mercedes", 150, 2019);
