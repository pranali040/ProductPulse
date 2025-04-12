import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private clienturl = 'http://localhost:3000/clients'
  private apiurl ='http://localhost:3000/products'
  
  constructor( private http: HttpClient) { }

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.clienturl)
  }
  //get - product details
  getproduct(): Observable<any[]>{
    return this.http.get<any[]>(this.apiurl)
  }
  productIDdetails(id:number): Observable<any>{
    return this.http.get<any>(`${this.apiurl}/${id}`);
  }

  //post
  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiurl, product);
  }

  //put
  updateproduct(id:number, product: any): Observable<any>{
    return this.http.put<any>(`${this.apiurl}/${id}`, product)
  }

  //delete
  deleteproduct(id:number): Observable<any>{
    return this.http.delete<any>(`${this.apiurl}/${id}`)
  }
}
