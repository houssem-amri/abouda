import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL:string = "http://localhost:4000/users";
  constructor(private httpClient : HttpClient) { }

  signup(user){
return this.httpClient.post<{message:string}>(`${this.userURL}/signup`,user);

  }
  login(user){
    return this.httpClient.post<{user:any}>(`${this.userURL}/login`,user)
    
  }
}