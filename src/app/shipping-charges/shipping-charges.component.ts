import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping-charges',
  templateUrl: './shipping-charges.component.html',
  styleUrls: ['./shipping-charges.component.css']
})
export class ShippingChargesComponent implements OnInit {

  constructor(private cartService: CartService) { }
  shippingPrice;
  ngOnInit() {
    this.shippingPrice = this.cartService.getShippingPrice();
  }

}
