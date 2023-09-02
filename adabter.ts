//Strcuture Pattern: Adapter
//explain: when we want to use an existing class but its interface is not compatible with what we need.
//we can use adapter pattern to make it compatible.
//example: we have two classes English and Spanish and we want to use them in a class called LangAdapter.

//Real Life Example: When we have xml and json data and we want to use them in a class called DataAdapter.

class English {
    public sayHello(): string {
        return 'Hello';
    }
    public sayBye(): string {
        return 'Bye';
    }
}

class Spanish {
    public sayHello(): string {
        return 'Hola';
    }
    public sayBye(): string {
        return 'Adios';
    }
}

interface LangAdapter {
    sayHello(): string;
    sayBye(): string;
}

class EnglishAdapter implements LangAdapter {
    public constructor(public english: English ) {
        this.english = english;
    }
    public sayHello(): string {
        return this.english.sayHello();
    }
    public sayBye(): string {
        return this.english.sayBye();
    }
}

class SpanishAdapter implements LangAdapter {
    public constructor(public spanish: Spanish ) {
        this.spanish = spanish;
    }
    public sayHello(): string {
        return this.spanish.sayHello();
    }
    public sayBye(): string {
        return this.spanish.sayBye();
    }
}

const english = new English();
const spanish = new Spanish();

const englishAdapter = new EnglishAdapter(english);
const spanishAdapter = new SpanishAdapter(spanish);

console.log(englishAdapter.sayHello());
console.log(spanishAdapter.sayHello());