import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorbanServiceService {

  constructor( private http: HttpClient,) { }

   private URL = 'https://api4.ajin.io/v2';

   getToken(body:string){
      return this.http.post(`${this.URL}/login`, body)
   }

  getCustomers(){
    return this.http.get(`${this.URL}/customers`)
  }

  postCustomers(body:string){
    return this.http.post(`${this.URL}/customers`, body)
  }

  putCustomer(id:number, body:string){
    return this.http.put(`${this.URL}/customers/${id}`, body)
  }

  deleteCustomer(id:number){
    return this.http.delete(`${this.URL}/customers/${id}`)
  }
}
