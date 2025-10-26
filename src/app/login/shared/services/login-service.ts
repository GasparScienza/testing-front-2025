import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/auth/login';

  login(email: string, password: string) {
    return this.http.post(
      this.apiUrl,
      { email, password },
      { withCredentials: true }
    );
  }

  me() {
    return this.http.get('http://localhost:3000/auth/me');
  }
}
