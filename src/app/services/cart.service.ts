import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../model/cart-item';
import { cartUrl } from '../config/api';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import{ map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }
  getCartItems(): Observable<CartItem[]>{
    //TO DO: mapping obtained results to our cartItem Prop.
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result : any[])=>{
       let cartItems : CartItem[] =[];
       for(let item of result){

        let productExists = false

        // if the product already exists in cart just increment the quantity 
        for(let i in cartItems){
                if(cartItems[i].productId === item.product.id){
                   cartItems[i].quantity ++;
                   productExists = true
                   break;
        }}
        // if the product doesn't exists pusha that product 
        if(!productExists){
          cartItems.push(new CartItem(item.id, item.product,item.quantity));
                     
        }

       }
       return cartItems;
      })

    );
  }
  addProductToCart(product : Product) : Observable<any>{
    return this.http.post(cartUrl,{product });
    
  }
}
