import { Component } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { Quote } from './interface/quote';
import { QuotesService } from './service/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading: boolean = false;
  quotes$: Observable<Quote[]>;
  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.loadQuotes();
  }

  loadQuotes() {
    this.loading = true;
    this.quotes$ = this.quotesService.getQuotes().pipe(
      catchError((err) => {
        console.error(err);
        return throwError(() => err);
      }),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
