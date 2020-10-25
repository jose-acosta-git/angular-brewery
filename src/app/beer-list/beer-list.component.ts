import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beer: Beer = {
    name: 'Negra Juerte',
    type: 'Porter',
    price: 123,
    stock: 5,
    image: 'assets/img/porter.jpeg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
