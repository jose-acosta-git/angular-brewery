import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Beer } from './beer-list/Beer';

@Injectable({
  providedIn: 'root'
})
export class CartListService {

  private _cartList: Beer[] = [];

  _cartListSubjet: BehaviorSubject<Beer[]> = new BehaviorSubject([]);

  public cartList: Observable<Beer[]> = this._cartListSubjet.asObservable();

  constructor() { }

  addToCart(beer: Beer) {
    let item: Beer = this._cartList.find((v1) => v1.name == beer.name);
    if (!item) {
      this._cartList.push({... beer});
    } else {
      item.quantity += beer.quantity;
    }
    this._cartListSubjet.next(this._cartList);
  }
}
