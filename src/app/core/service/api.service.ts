import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  configUrl = 'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments';

  constructor(private http: HttpClient) { }


  get(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.configUrl, { observe: 'response' });
  }

  getById(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.configUrl}/${id}`, { observe: 'response' });
  }
}
