import { Client } from "./../Model/Client.js"
import axios from "axios"

export class ClientController{

    constructor() {}

    async clientUpdate(c: Client) {
        try {
            const { data, status } = await axios.post(
                'https://api.megaventory.com/v2017a/SupplierClient/SupplierClientUpdate',
                { APIKEY: process.env.APIKEY,
                    mvSupplierClient: {
                        SupplierClientName: c.name,
                        SupplierClientType: c.clientType,
                        SupplierClientEmail: c.email,
                        SupplierClientShippingAddress1: c.shippingAddress,
                        SupplierClientPhone1: c.phone
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