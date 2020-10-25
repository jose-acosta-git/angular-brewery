import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart = [{
    "name": "Negra Juerte",
    "type": "Porter",
    "price": 123,
    "stock": 5,
    "image": "assets/img/porter.jpeg"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
