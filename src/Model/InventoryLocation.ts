export class InventoryLocation {

    readonly abbreviation: string;
    readonly name: string;
    readonly address: string;

    constructor(abbreviation: string, name: string, address: string) {
        this.abbreviation = abbreviation;
        this.name = name;
        this.address = address;
    }
}