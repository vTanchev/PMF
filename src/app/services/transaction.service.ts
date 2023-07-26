import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  public getTransactions(): Observable<any> {
    return this.http.get<any>(
      'http://127.0.0.1:4010/transactions?page=817&page-size=331&sort-by=ut&sort-order=desc'
    );
  }

  public createUser() {}

  public updateUser() {}

  public deleteUser() {}
}
