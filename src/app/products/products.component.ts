import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts: Product[] | undefined;
  arraySize: number  = 0;
  rows: number =0;
  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAllProducts().subscribe((res) =>{
      this.allProducts = res as Product[];
      console.log(this.allProducts);
      this.rows = this.allProducts.length/4;
      console.log(this.rows);
      this.arraySize = this.allProducts.length
    });
  }


}
