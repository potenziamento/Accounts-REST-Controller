import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/api/accounts';
  private accountId = '14537780';

  constructor(private http: HttpClient) { }

  getBalance(): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.accountId}/balance`);
  }
  
  getTransactions(fromDate: string, toDate: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.accountId}/transactions?fromAccountingDate=${fromDate}&toAccountingDate=${toDate}`);
  }

  createMoneyTransfer(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${this.accountId}/moneyTransfer`, data);
  }
}
