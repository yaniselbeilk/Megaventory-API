import {Client} from './Client.js'
export class Supplier extends Client {

    readonly clientType: string = "Supplier"
    
    constructor(name: string, email: string, shippingAddress: string, phone: number) {
        super(name, email, shippingAddress, phone);
    }
}