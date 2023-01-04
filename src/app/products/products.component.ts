import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../product-list';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = PRODUCTS;
  constructor() { }

  ngOnInit(): void {
  }
onClick(){
  alert('This product shared');
}

onBuy(){
  alert('This product added to cart');
}

onNotify(){
  window.alert('product on sale');
}


}
