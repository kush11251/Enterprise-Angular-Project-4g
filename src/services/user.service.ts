// User service for data fetching
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.model';
@Injectable()
export class UserService {
  private apiUrl = 'https://api.example.com/users';
  constructor(private http: HttpClient) {}
  getUsers(): any {
    return this.http.get(this.apiUrl);
  }
}