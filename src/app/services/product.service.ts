import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {
    products: Array<Product> = [];

    public initialize() {
        if (this.products.length > 0)
            return;

        for(let i = 0; i < 10; i++) {
            this.products.push(new Product(
                i,
                `Product ${i+1}`,
                `Description ${i+1}`,
                i*2,
                i*5%25
            ));
        }
    }

    public get(): Array<Product> {
        return this.products;
    }

    public getProduct(id: number): Product|undefined {
        return this.products.find(x => x.id == id);
    }

    public update(product: Product) {
        const existing = this.getProduct(product.id);
        if (!existing)
            return;

        existing.name = product.name;
        existing.description = product.description;
        existing.price = product.price;
        existing.quantity = product.quantity;
    }

    public delete(id: number) {
        this.products = this.products.filter(x => x.id != id);
    }
}
