export class Product {

    readonly sku: number;
    readonly description: string;
    readonly salesPrice: number;
    readonly purchasePrice: number;

    constructor(sku: number, description: string, salesPrice: number, purchasePrice: number) {
        this.sku = sku;
        this.description = description;
        this.salesPrice = salesPrice;
        this.purchasePrice = purchasePrice;
    }
}