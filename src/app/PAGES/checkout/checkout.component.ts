import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  items:any[]=[];

  constructor(public shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart()
  {
   this.items = this.shoppingCartService.getShoppingCartItems();
  }


  deleteEventHandler()
  {
    this.getShoppingCart();
  }

}
