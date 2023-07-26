import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-list-of-transactions',
  templateUrl: './list-of-transactions.component.html',
  styleUrls: ['./list-of-transactions.component.scss'],
})
export class ListOfTransactionsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() set transactions(transactions: Transaction[] | undefined) {
    if (transactions) {
      this.dataSource.data = transactions;
      this.dataSource.paginator = this.paginator;
    }
  }

  public dataSource = new MatTableDataSource<Transaction>();
  public displayedColumns: string[] = ['name-and-date', 'amount-details'];

  constructor() {}

  ngOnInit(): void {}
}
