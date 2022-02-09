import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products: Product[] = [
    new Product(1, 'Product1','this is product 1 description: this product is really cool',100),
    new Product(1, 'Product2','this is product 2 description: this product is really cool',200),
    new Product(3, 'Product3','this is product 3 description: this product is really cool',300),
    new Product(4, 'Product4','this is product 4 description: this product is really cool',400),
    new Product(5, 'Product5','this is product 5 description: this product is really cool',500)
  ]

  constructor() { }

getProducts():Product[]{
  //TO Do:populate products from an API and return and observable
return this.Products
}
}
