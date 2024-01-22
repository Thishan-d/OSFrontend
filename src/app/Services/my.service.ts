import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { UserElement } from '../Interfaces/User';
@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http: HttpClient) {
  }
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  // getData(): Observable<any> {
  //   return this.http.get<any>(this.getUrl);
  // }

  getData(): Observable<UserElement[]> {
    return this.http.get<UserElement[]>(this.apiUrl);
  }
}
