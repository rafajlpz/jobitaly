class Car {
  // Propiedades de la classe
  private static numeroDeCoches: number = 0; // Nueva propiedad estatica
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Las puertas deben ser un numero par");
    }
    Car.numeroDeCoches++; // Incrementa el valor de la propiedad estatica
  }

  // Accessors
  get make() {
    return this._make;
  }
  set make(make) {
    this._make = make;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }
  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors debe ser un numero");
    }
  }
  public static getNumeroDeCoches(): number {
    return Car.numeroDeCoches;
  }

  // Metodos
  accelerate(speed: number): string {
    return `${this.worker()} esta acelerando a una velocidad de ${speed} KM/S`;
  }
  brake(): string {
    return `${this.worker()} esta utilizando el sistema de frenos estandar`;
  }
  turn(direction: "izquierda" | "derecha"): string {
    return `${this.worker()} esta girando a la ${direction}`;
  }

  // Esta funcion realiza el trabajo para las otras funciones del metodo.
  protected worker(): string {
    return this._make;
  }
}

class ElectricCar extends Car {
  // Propiedades unicas de ElectricCar
  private _range: number;

  // Constructor
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }

  // Accessors
  get range(){
    return this._range;
  }
  set range(range){
    this._range = range;
  }

  // Metodos
  charge() {
    console.log(this.worker() + ` esta cargando...`)
  }

  brake(): string{
    return `${this.worker()} esta frenando con el sistema de frenado regenerativo`
  }

}

let myCar1 = new Car("Coche de la compania", "Blanco", 4);

let myCar2 = new Car("Mercedes", "Negro", 2);

//console.log(Car.getNumeroDeCoches());

//let myCar3 = new Car('Peugeot', 'Gris');
//console.log(myCar3.doors); //Devuelve 4, valor por defecto.

//console.log(myCar1.accelerate(60));
//console.log(myCar1.brake());
//console.log(myCar1.turn('derecha'));

//Probando la nueva clase ElectricCar
let spark = new ElectricCar('Tiburon Motors', 'Plateado', 124, 2);

let eCar = new ElectricCar('Electric Car Co.', 'black', 263);

//console.log(eCar.doors); //devuelve el valor por defecto que es 2.
//spark.charge(); //devuelve "Spark motors is charging"

//console.log(spark.brake()); // devuelve "Spark Motors esta frenando con el sistema de frenado regenerativo"

interface Vehicle {
  make: string;
  color: string;
  door: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: 'izquierda | derecha'): string;
}