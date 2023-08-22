import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(
      'http://localhost:8800/api/auth/register',
      data
    );
  }

  login(data: any) {
    return this.http.post('http://localhost:8800/api/auth/login', data);
  }
}
