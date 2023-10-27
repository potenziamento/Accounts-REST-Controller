import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{

  transactions: any[] = [];
  error: string | null = null;
  fromDate: string = '2019-01-01';
  toDate: string = '2019-12-01';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTransactions();
  }
  getTransactions():void{
    this.apiService.getTransactions(this.fromDate, this.toDate).subscribe(
      data => {
        this.transactions = data;
        this.error = null;
      },
      err => {
        this.error = 'Si è verificato un errore nel recupero delle transazioni.';
        console.error(err);
      }
    );
  }
}
