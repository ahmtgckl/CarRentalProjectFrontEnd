import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44310/api/auth/';

  constructor(private httpClient: HttpClient,
    private localStorageService: LocalstorageService) { }


  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel)
  }




  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;

    } else {
      return false;
    }
  }







}
