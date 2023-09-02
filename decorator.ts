//Structural Design Pattern
// when we want to add new functionality to an existing object without changing its structure.
//suppose we have a pizza class and  we want to do some changes on its subclasses' methods.
// this functionality could be added by inheritance but it is not a good way because it is not flexible.
// we can add new functionality by composition and decorator pattern.

class Pizza {
    public getDescription(): string {
        return "Pizza";
    }

    public getCost(): number {
        return 10;
    }
}

class ItalianPizza extends Pizza {
    public getDescription(): string {
        return "Italian Pizza";
    }

    public getCost(): number {
        return 15;
    }
}


//! Bad way
class ItalianPizzaWithCheese extends ItalianPizza {
    public getDescription(): string {
        return "Italian Pizza With Cheese";
    }

    public getCost(): number {
        return 20;
    }
}


//!every special pizza will be a decorator and cost will be increased by 5
class ItalianPizzaDecorator extends Pizza {
    constructor() {
        super();
    }
    public getDescription(): string {
        //do something
        return super.getDescription();
        //do something
    }

    public getCost(): number {
        //do something
        return super.getCost() + 5;
        //do something
    }
}
//better way with decorator
class ItalinPuzzaWithChesse2 extends ItalianPizzaDecorator {
    constructor() {
        super();
    }
    public override getDescription(): string {
        return super.getDescription() + " With Cheese";
    }

    public override getCost(): number {
        return super.getCost() + 20;
    }
}
//.............................................
class TurkishPizza extends Pizza {
    public getDescription(): string {
        return "Turkish Pizza";
    }

    public getCost(): number {
        return 20;
    }
}