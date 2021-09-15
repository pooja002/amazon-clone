import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout-sub-total',
  templateUrl: './checkout-sub-total.component.html',
  styleUrls: ['./checkout-sub-total.component.css']
})
export class CheckoutSubTotalComponent implements OnInit {

  constructor(public shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
  }

}
