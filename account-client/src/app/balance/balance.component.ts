import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit{

  date: string | null = null;
  balance: number | null = null;
  availableBalance: number | null = null;
  currency: string | null = null;
  error: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance(): void {
    this.apiService.getBalance().subscribe(
      data=> {
        this.date = data.date;
        this.balance = data.balance;
        this.availableBalance = data.availableBalance;
        this.currency = data.currency;
      },
      err => {
        this.error = 'Si è verificato un errore nel recupero del saldo.';
        console.error(err);
      }
    )
  }
}
