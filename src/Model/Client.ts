class Client {

    readonly name: string;
    readonly email: string;
    readonly shippingAddress: string;
    readonly phone: number;

    constructor(name: string, email: string, shippingAddress: string, phone: number) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.phone = phone;
    }
}