import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  cachedProductsData$:any;
  getProducts(){
    if(!!this.cachedProductsData$){
      return this.cachedProductsData$;
    }else{
      this.cachedProductsData$ = this.http.get('https://api.escuelajs.co/api/v1/products').pipe(shareReplay(1));
      return this.cachedProductsData$;
    }
  }
}
