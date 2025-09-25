abstract class PaymentProcesser {
  abstract process(amount: number): void;
}

class CreditCardPaymentProcessor extends PaymentProcesser {
  process(amount: number): void {
    console.log(`Processing payment of ${amount} through credit card`);
  }
}

class PaypalPaymentProcessor extends PaymentProcesser {
  process(amount: number): void {
    console.log(`Processing payment of ${amount} through paypal payment`);
  }
}

const creditCard = new CreditCardPaymentProcessor();
const paypal = new PaypalPaymentProcessor();

creditCard.process(100);
paypal.process(200);

export class Product {
  constructor(public props: ProductProps) {
    if (!props.name) throw new Error("Product name is required");
    if (props.price <= 0) throw new Error("Price must be positive");
  }
}

abstract class PaymentProcessor {
  abstract process(amount: number): void;
}
class CreditCardProcessor extends PaymentProcessor {
  process(amount: number): void {
    console.log(`Processing ${amount} via credit card`);
  }
}
class PayPalProcessor extends PaymentProcessor {
  process(amount: number): void {
    console.log(`Processing ${amount} via PayPal`);
  }
}
