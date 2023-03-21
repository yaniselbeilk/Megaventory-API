export class Client {

    readonly name: string;
    readonly email: string;
    readonly shippingAddress: string;
    readonly phone: number;
    readonly clientType: string = "Client"

    constructor(name: string, email: string, shippingAddress: string, phone: number) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.phone = phone;
    }
}