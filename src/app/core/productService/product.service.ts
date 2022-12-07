import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  tab = ['a', 'b', 'c']
url=environment.baseUrl;
  constructor(private http: HttpClient) { }

  addProduct(data: any) {
    return this.http.post(this.url+'products/', data)
  }
  fetchProducts():Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products/')
  }
  removeProduct(id:any) {
    return this.http.delete('http://localhost:3000/products/'+id)
  }
  updateProduct(data: any,id:any) {
    return this.http.put('http://localhost:3000/products/'+id, data)
  }
  getProductById(id:any):Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/products/'+id)
  }

  addElementToTab(element: any) {
    this.tab.push(element)
    console.log(this.tab);
  }
  obs() {
    return new Observable(
      () => {
        console.log('obssssss')
      }
    )
  }


}
