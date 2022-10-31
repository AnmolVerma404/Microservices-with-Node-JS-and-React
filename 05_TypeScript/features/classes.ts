class Vehicle {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  protected honk(): void {
    console.log("beep");
  }
}
const vehicle = new Vehicle("Red");
console.log(vehicle.color);
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }
  public startDrivingProcess(): void {
    //Public by default
    this.drive();
    this.honk();
  }
}
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
const car = new Car(5, "Orange");
console.log(car.color);
console.log(car.wheels);
car.startDrivingProcess();
