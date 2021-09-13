import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  addProduct=(product:any)=>
  {
    console.log('added',product);
     localStorage.setItem('shopping_cart',JSON.stringify(product));
  }

  getShoppingCartItems=()=>
  {
   let items =  localStorage.getItem('shopping_cart') as string;
   return JSON.parse(items);
  }

}
