import { InventoryLocation } from "../Model/InventoryLocation.js"
import axios from "axios"

export class InventoryLocationController {

    constructor() { }

    async inventoryLocationUpdate(il: InventoryLocation) {
        try {
            const { data, status } = await axios.post(
                'https://api.megaventory.com/v2017a/InventoryLocation/InventoryLocationUpdate',
                {
                    APIKEY: process.env.APIKEY,
                    mvInventoryLocation: {
                        InventoryLocationAbbreviation: il.abbreviation,
                        InventoryLocationName: il.name,
                        InventoryLocationAddress: il.address,
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