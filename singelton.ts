//! Singelton pattern is a creational design pattern that lets you ensure that a class has only one instance,
// while providing a global access point to this instance.
//!we want just one instance of a class, and we want to provide a global point of access to it.
// it could be used for logging, caching, thread pools, configuration settings, device driver objects,Database.

class Singelton {
    public static instance: Singelton;
    private constructor() { }
    public static getInstance(): Singelton {
        if (!Singelton.instance) {
            Singelton.instance = new Singelton();
        }
        return Singelton.instance;
    }
    // other methods
    public log() {
        console.log('log');
    }

}

const instance1: Singelton = Singelton.getInstance();
const instance2: Singelton = Singelton.getInstance();
instance1.log(); // log
console.log(instance1 === instance2); // true





//Singelton with database example

interface Car {
    color: string;
    model: string;
    year: number;
}

interface Database<T> {
    name: string;
    connect(): void;
    getById(id: number): T;
    save(data: T): void;
}

class SingeltonDatabase implements Database<Car> {
    private static instance: SingeltonDatabase;
    public name = 'Cars Database';
    private constructor() {
    }
    public static getInstance(): SingeltonDatabase {
        if (!SingeltonDatabase.instance) {
            SingeltonDatabase.instance = new SingeltonDatabase();
        }
        return SingeltonDatabase.instance;
    }
    // other methods
    public connect() {
        console.log('connect');
    }
    public getById(id: number): Car {
        return { color: 'red', model: 'BMW', year: 2020 };
    }
    public save(data: Car): void {
        console.log('save');
    }

}

const instance3: SingeltonDatabase = SingeltonDatabase.getInstance();

const instance4: SingeltonDatabase = SingeltonDatabase.getInstance();
instance4.getById(1);
instance4.save({ color: 'red', model: 'BMW', year: 2020 });
console.log(instance3 === instance4); // true