import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Quote } from '../interface/quote';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private http: HttpClient) {}

  getQuotes(): Observable<Quote[]> {
    return this.http
      .get<{
        limit: number;
        quotes: Quote[];
        skip: number;
        total: number;
      }>(`https://dummyjson.com/quotes`)
      .pipe(map((response) => response.quotes));
  }
}
