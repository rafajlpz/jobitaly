class Car {
  // Propiedades de la classe
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor 
  constructor(make: string, color: string, doors = 4){
    this._make = make;
    this._color = color;
    if (doors % 2 === 0){
        this._doors = doors;
    } else {
        throw new Error ('Las puertas deben ser un numero par')
    }
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
       throw new Error('Doors debe ser un numero');
    }
  }
  
  // Metodos
    accelerate(speed: number): string {
        return `${this.worker()} esta acelerando a una velocidad de ${speed} KM/S`
    }
    brake(): string{
        return `${this.worker()} esta utilizando el sistema de frenos estandar`
    }
    turn(direction: 'izquierda' | 'derecha'): string {
        return `${this.worker()} esta girando a la ${direction}`
    }

    // Esta funcion realiza el trabajo para las otras funciones del metodo.
    private worker(): string {
        return this._make;
    }
}

let myCar1 = new Car('Coche de la compania', 'Blanco', 4);

let myCar2 = new Car('Mercedes', 'Negro', 2);

let myCar3 = new Car('Peugeot', 'Gris');
//console.log(myCar3.doors); //Devuelve 4, valor por defecto.

console.log(myCar1.accelerate(60));
console.log(myCar1.brake());
console.log(myCar1.turn('derecha'));