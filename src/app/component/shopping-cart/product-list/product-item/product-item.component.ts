import { Component, OnInit ,Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 @Input() productItem!: Product;

  constructor(private Msg: MessengerService, private cartService :CartService)
   { 
    
  }

  ngOnInit() {
  }
  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
this.Msg.sendMsg(this.productItem)
    })
  }

}

