var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PaymentProcesser = /** @class */ (function () {
    function PaymentProcesser() {
    }
    return PaymentProcesser;
}());
var CreditCardPaymentProcessor = /** @class */ (function (_super) {
    __extends(CreditCardPaymentProcessor, _super);
    function CreditCardPaymentProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditCardPaymentProcessor.prototype.process = function (amount) {
        console.log("Processing payment of ".concat(amount, " through credit card"));
    };
    return CreditCardPaymentProcessor;
}(PaymentProcesser));
var PaypalPaymentProcessor = /** @class */ (function (_super) {
    __extends(PaypalPaymentProcessor, _super);
    function PaypalPaymentProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaypalPaymentProcessor.prototype.process = function (amount) {
        console.log("Processing payment of ".concat(amount, " through paypal payment"));
    };
    return PaypalPaymentProcessor;
}(PaymentProcesser));
var creditCard = new CreditCardPaymentProcessor();
var paypal = new PaypalPaymentProcessor();
creditCard.process(100);
paypal.process(200);
