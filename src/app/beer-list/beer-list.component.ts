import { Component, OnInit } from '@angular/core';
import { CartListService } from '../cart-list.service';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
    {
    name: 'Bitter Call Saul',
    type: 'IPA',
    price: 180,
    stock: 5,
    image: 'assets/img/porter.jpeg',
    clearance: false,
    quantity: 0,
    },
    {
    name: 'Red Red Wine',
    type: 'Barley Wine',
    price: 200,
    stock: 3,
    image: 'assets/img/porter.jpeg',
    clearance: true,
    quantity: 0,
    },
    {
      name: 'Yellow Submarine',
      type: 'Golden Ale',
      price: 180,
      stock: 0,
      image: 'assets/img/porter.jpeg',
      clearance: false,
      quantity: 0,
    }
  ];

  constructor(private cartList: CartListService) { }

  ngOnInit(): void {
  }

  maxReached(max: boolean) {
    alert("No hay más stock!");
  }

  addToCart(beer: Beer) {
    this.cartList.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }

}
