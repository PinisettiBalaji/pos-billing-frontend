import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>('http://localhost:5000/auth/login', { username, password })
      .subscribe((res) => {
        localStorage.setItem(this.tokenKey, res.token);
        this.router.navigate(['/billing']);
      });
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

}
