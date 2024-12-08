import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private readonly ADMIN_USER = 'admin@gmail.com';
  private readonly ADMIN_PASSWORD = 'admin123';

  login(username: string, password: string): boolean {
    if (username === this.ADMIN_USER && password === this.ADMIN_PASSWORD) {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || localStorage.getItem('isLoggedIn') === 'true';
  }
}
