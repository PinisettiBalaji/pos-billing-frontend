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

  getItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addItem(item:Item): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }
}
