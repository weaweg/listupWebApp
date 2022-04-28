import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private productService: ProductService) {
    this.productService.initialize();
  }

  ngOnInit(): void {
    this.products = this.productService.get();
  }

  onDelete(id: number) {
    this.productService.delete(id);
    this.products = this.productService.get();
  }
}
