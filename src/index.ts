import { Product } from "./Model/Product.js"
import { Client } from "./Model/Client.js"
import { Supplier } from "./Model/Supplier.js";
import { InventoryLocation } from "./Model/InventoryLocation.js"
import { ClientController } from './Controller/ClientController.js';
import { ProductController } from './Controller/ProductController.js';
import { InventoryLocationController } from "./Controller/InventoryLocationController.js";
import { ProductClientController } from "./Controller/ProductClientController.js"

import env from "dotenv"
env.config();


const product1 = new Product(1112256, "Nike shoes", 99.99, 44.99);
const product2 = new Product(1112248, "Adidas shoes", 99.99, 44.99);
const productController = new ProductController();
productController.productUpdate(product1);
productController.productUpdate(product2);
const supplier = new Supplier("odysseus", "odysseus@exampletest.com", "Example 10, Athens", 1235698988);
const client1 = new Client("babis", "babis@exampletest.com", "Example 8, Athens", 1235698967);
const clientController = new ClientController();
clientController.clientUpdate(client1);
clientController.clientUpdate(supplier);
const inventoryLocation = new InventoryLocation("Test", "Test Project Location", "Example 10, Athens");
const inventoryLocationController = new InventoryLocationController();
inventoryLocationController.inventoryLocationUpdate(inventoryLocation);
