import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []
  //dependency injection
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productList = this.productService.getProducts()
    console.log(this.productList)
  }

}
