import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './interface/quote';
import { QuotesService } from './service/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quotes$: Observable<Quote[]>;
  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.loadQuotes();
  }

  loadQuotes() {
    this.quotes$ = this.quotesService.getQuotes();
  }
}
