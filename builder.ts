// Builder pattern aims to “Separate the construction of a complex object from its representation so that the same construction process 
// can create different representations.” It is used to construct a complex object step by step and the final step will 
// return the object. The process of constructing an object should be generic so that it can be used to create different representations of the same object.

interface Car {
    color: string;
    model: string;
    year: number;
}

class Car implements Car {
    constructor() { }
}

class CarBuilder {
    private car: Car;
    constructor() {
        this.car = new Car();
    }

    setColor(color: string): CarBuilder {
        this.car.color = color;
        return this;
    }

    setModel(model: string): CarBuilder {
        this.car.model = model;
        return this;
    }

    setYear(year: number): CarBuilder {
        this.car.year = year;
        return this;
    }

    build(): Car {
        return this.car;
    }
}

const car = new CarBuilder()
    .setColor('red')
    .setModel('BMW')
    .setYear(2020)
    .build();

console.log(car); // Car { color: 'red', model: 'BMW', year: 2020 }