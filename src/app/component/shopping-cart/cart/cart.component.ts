import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
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
cartItems : {productName:string;quantity:number, price:number}[]=[];

cartTotal=0

 constructor(private msg:MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: any) => { 
      this.cartItems.push({
         productName: product.name, 
         quantity: 1,
         price: product.price
        })
        this.cartTotal = 0; 
        this.cartItems.forEach(item => { 
          this.cartTotal += (item['quantity'] * item['price']) 
        }) 
      })
  }

}


