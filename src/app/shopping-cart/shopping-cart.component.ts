import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../beer-list/Beer';
import { CartListService } from '../cart-list.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartList$: Observable<Beer[]>;

  constructor(private cart: CartListService) {
    this.cartList$ = cart.cartList;
  }

  ngOnInit(): void {
  }

}
