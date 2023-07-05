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
  
}