import { Client } from "./../Model/Client.js"
import { Product } from "./../Model/Product.js"
import axios from "axios"

export class ProductClientController {

    constructor() { }

    async productClientUpdate(c: Client, p: Product) {
        try {
            const { data, status } = await axios.post(
                'https://api.megaventory.com/v2017a/ProductClient/ProductClientUpdate',
                {
                    APIKEY: process.env.APIKEY,
                    mvProductClientUpdate: {
                        ProductID: p.sku,
                        ProductClientPrice: p.purchasePrice,
                        ProductClientDescription: p.description,
                    }
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            );

            console.log(JSON.stringify(data, null, 4));
            console.log(status);

            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
}