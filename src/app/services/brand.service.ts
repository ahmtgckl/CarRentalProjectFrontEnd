import { HttpClient } from '@angular/common/http'; //backende istekte bulunup verileri çekeceğiz
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl= "https://localhost:44310/api/"  //data başka bir adresten çekiliyorsa o adersin url kısmı kullanılır
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"Brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  addBrand(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/add",brand)
  }





}
//Getbycarid
