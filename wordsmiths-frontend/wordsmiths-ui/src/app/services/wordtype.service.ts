import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wordtype } from '../models/wordtype.model';

const baseUrl = 'http://localhost:8000/word_types';

@Injectable({
  providedIn: 'root'
})
export class WordtypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Wordtype[]> {
    return this.http.get<Wordtype[]>(baseUrl);
  }

  get(id: any): Observable<Wordtype> {
    return this.http.get<Wordtype>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Wordtype[]> {
    return this.http.get<Wordtype[]>(`${baseUrl}?title=${title}`);
  }

}
