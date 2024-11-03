import { Component } from '@angular/core';
import { Item } from 'src/app/models/Item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {
  items: Item[] = [];
  cart: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  addToCart(item: Item) {
    this.cart.push(item);
  }

  calculateTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
