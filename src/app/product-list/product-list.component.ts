import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products = products;
  share(prodName: string) {
    window.alert(prodName + ' has been shared.');
  }

  onNotify() {
    window.alert('You will be notified when this product has sale');
  }
}
