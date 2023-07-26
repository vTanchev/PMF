import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] | undefined;
  transactionsToRender: Transaction[] | undefined;

  constructor(private service: TransactionService) {}

  ngOnInit(): void {
    this.service.getTransactions().subscribe((data) => {
      this.transactions = data.items;
      this.transactionsToRender = data.items;
    });
  }

  handleFilteredTransactions(transactions: Transaction[]) {
    this.transactionsToRender = transactions;
  }
}
