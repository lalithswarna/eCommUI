import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_BASE_URL = 'https://localhost:44389/api/products'; // Replace with your Web API URL

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.API_BASE_URL);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.API_BASE_URL, product);
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put<any>(`${this.API_BASE_URL}/${product.id}`, product);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>(`${this.API_BASE_URL}/${productId}`);
  }
}
