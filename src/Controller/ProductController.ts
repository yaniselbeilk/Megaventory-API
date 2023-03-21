import { Product } from "./../Model/Product.js"
import axios from "axios"

export class ProductController {

    constructor() { }

    async productUpdate(p: Product) {
        try {
            const { data, status } = await axios.post(
                'https://api.megaventory.com/v2017a/Product/ProductUpdate',
                // Parameters of the API megainventory
                {
                    APIKEY: process.env.APIKEY,
                    mvProduct: {
                        ProductSKU: p.sku,
                        ProductDescription: p.description,
                        ProductSellingPrice: p.salesPrice,
                        ProductPurchasePrice: p.purchasePrice
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