import { Component, OnInit ,Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 @Input() productItem!: Product;

  constructor(private Msg: MessengerService) { 
    
  }

  ngOnInit() {
  }
  handleAddToCart(){
    this.Msg.sendMsg(this.productItem)
  }

}

