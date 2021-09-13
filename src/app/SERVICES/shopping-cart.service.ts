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

}
