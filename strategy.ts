//Behavioral Design Pattern
//explain: when we want to change the behavior of an object at runtime. this behavior is strategy.

interface PaymentStrategy {
    pay(amount: number): void;
    cardNumber: string;
    cvv: string;
    dateOfExpiry: string;
    stretegyType: string;
}

class PaypalStrategy implements PaymentStrategy {
    cardNumber: string="";
    cvv: string="";
    dateOfExpiry: string="";
    readonly stretegyType: string = "paypal";
    constructor() {
    }
    pay(amount: number): void {
        console.log(`pay ${amount} with paypal`);
    }
}
class ApplePayStrategy implements PaymentStrategy {
    cardNumber: string="";
    cvv: string="";
    dateOfExpiry: string="";
    readonly stretegyType: string = "applePay";
    constructor() {
    }
    pay(amount: number): void {
        console.log(`pay ${amount} with applePay`);
    }
}

//let's define it as a singleton
class PaymentService {
    private static instance: PaymentService;
    public paymentStrategy: PaymentStrategy= new PaypalStrategy();
    private constructor() {
    }
    public static getInstance(): PaymentService {
        if (!PaymentService.instance) {
            PaymentService.instance = new PaymentService();
        }
        return PaymentService.instance;
    }
    pay(amount: number) {
        this.paymentStrategy.pay(amount);
    }

    //! this is the strategy part. we can change the strategy at runtime.
    setPaymentStrategy(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
}


const paymentService = PaymentService.getInstance();
const paypalStrategy = new PaypalStrategy();
const applePayStrategy = new ApplePayStrategy();

paymentService.setPaymentStrategy(new PaypalStrategy());
paymentService.pay(100);
paymentService.setPaymentStrategy(new ApplePayStrategy());
paymentService.pay(200);
