class Car {
  // Propiedades de la classe
  _make: string;
  _color: string;
  _doors: number;

  // Constructor 
  constructor(make: string, color: string, doors = 4){
    this._make = make;
    this._color = color;
    this._doors = doors;
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
    if (doors / 2 === 0) {
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
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`
    }

    // Esta funcion realiza el trabajo para las otras funciones del metodo.
    worker(): string {
        return this._make;
    }
}
