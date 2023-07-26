import { Component, OnInit } from '@angular/core';
import { TransactionService } from './services/transaction.service';
import { Transaction } from './models/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Asseco';

  constructor() {}

  ngOnInit(): void {}
}
