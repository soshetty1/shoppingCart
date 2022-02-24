import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItems =[
  {id: 1,productid:1,productName: 'test1', quantity:4, price:100 },
{id: 1,productid:3,productName: 'test2' ,quantity:4, price:400 },
{id: 1,productid:6, productName: 'test3', quantity:2, price:200 },
{id: 1,productid:1,productName: 'test4' ,quantity:1, price:150 }
];

cartTotal=0

  constructor() { }

  ngOnInit() {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.price)
    })
  }

}
