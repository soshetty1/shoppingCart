import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

// cartItems =[
// {id: 1,productid:1,productName: 'test1', quantity:4, price:100 },
// {id: 1,productid:3,productName: 'test2' ,quantity:4, price:400 },
// {id: 1,productid:6, productName: 'test3', quantity:2, price:200 },
// {id: 1,productid:1,productName: 'test4' ,quantity:1, price:150 }
// ];
cartItems : {productName:string;quantity:number, price:number,productId:number}[]=[];

cartTotal=0

 constructor(private msg:MessengerService, 
  private cartService: CartService) { }

  ngOnInit() {
    this.handleSubscription(); 
    this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product: any) => { 
      this.addProductTocart(product)
       })
      }
      loadCartItems(){
        this.cartService.getCartItems().subscribe((items: CartItem[]) => {
          this.cartItems =items;
          this.calCartTotal();
        })

      }
addProductTocart(product: Product)
{
  let productExists = false

  // if the product already exists in cart just increment the quantity 
  for(let i in this.cartItems){
          if(this.cartItems[i].productId === product.id){
             this.cartItems[i].quantity ++;
             productExists = true
             break;
  }}
  // if the product doesn't exists pusha that product 
  if(!productExists){
    this.cartItems.push({
           productId: product.id,
            productName: product.name, 
           quantity: 1,
          price: product.price
          })
  }
  // if(this.cartItems.length === 0){
  //   this.cartItems.push({
  //     productId: product.id,
  //      productName: product.name, 
  //      quantity: 1,
  //      price: product.price
  //     })
  //    } else{
  //     for(let i in this.cartItems){
  //       if(this.cartItems[i].productId === product.id){
  //         this.cartItems[i].quantity ++;
  //         break;
  //       } else {
  //         this.cartItems.push({
  //           productId: product.id,
  //            productName: product.name, 
  //            quantity: 1,
  //            price: product.price
  //           })
  //       }

    
  //     }

  //     }
this.calCartTotal();
 
}
calCartTotal(){
  this.cartTotal = 0; 
  this.cartItems.forEach(item => { 
    this.cartTotal += (item['quantity'] * item['price']) 
  }) 
}
}
