export class Product {
    id:number ;
    name: string;
    description: string ;
    price: number ;
    imageUrl: string ;

constructor(id: number ,name: string, description ='', price= 0, imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvy6S1Ds1Vw9qJxEYgOJG9d8kF2F2RgPIvg&usqp=CAU'){
    this.id= id;
    this.name=name;
    this.description=description;
    this.price=price;
    this.imageUrl=imageUrl;
}
}



