import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit {
  items: Item[] = [];
  item: Item = {id:1, name: '', price: 0, stockLevel: 0 };

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe((items) => (this.items = items));
  }

  onSubmit() {
    if (this.item.id) {
      this.itemService.updateItem(this.item.id, this.item).subscribe(() => this.getItems());
    } else {
      this.itemService.addItem(this.item).subscribe(() => this.getItems());
    }
    this.resetForm();
  }

  editItem(item: Item) {
    this.item = { ...item };  // Populate form for editing
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe(() => this.getItems());
  }

  resetForm() {
    this.item = {id:1, name: '', price: 0, stockLevel: 0 };
  }
}
