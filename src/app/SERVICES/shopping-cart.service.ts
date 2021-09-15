import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shopping_cart_items :any[]=[];

  constructor() { }

  addProduct=(product:any)=>
  {
    let items = this.getShoppingCartItems();
    if(items)
    {
      items.push(product);
      localStorage.setItem('shopping_cart',JSON.stringify(items));
    }
    else
    {
      this.shopping_cart_items.push(product);
      localStorage.setItem('shopping_cart',JSON.stringify(this.shopping_cart_items));
    }
    // console.log('added',product);
    //  localStorage.setItem('shopping_cart',JSON.stringify(product));
  }

  getShoppingCartItems=()=>
  {
   let items =  localStorage.getItem('shopping_cart') as string;
   return JSON.parse(items);
  }


  getCartSize=()=>
  {
   let items = this.getShoppingCartItems();
   return items?this.getShoppingCartItems().length:0;
  }

  getTotal=()=>
  {
    let items = this.getShoppingCartItems();
    return items?.reduce((acc: any, item: { price: any; })=> acc+ item.price, 0);
  }

  removerItem=(p:any)=>{
    console.log('calling remover ', p);
    let items = this.getShoppingCartItems();
    
    const index = items.findIndex((item: { id: any; })=> item.id == p.id);
    if(index>=0){
      console.log('hitting if');
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items));
    }
  }
}
