import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/Item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = 'http://localhost:5000/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  addItem(item: Item): Observable<any> {
    return this.http.post<Item>(`${this.apiUrl}/add`, item);
  }

  updateItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${id}`, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
