import { Product } from "./product";

export class CartItem {
    id: number ;
    productId: number ;
    productName:string ;
    price: number ;
    quantity:number;

    constructor(id: any,product:Product,quantity:1){
        this.id= id;
this.productId = product.id;
this.productName= product.name;
this.price = product.price;
this.quantity = quantity;
        
    }
}

