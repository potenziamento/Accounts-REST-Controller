import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';

const routes: Routes = [
  { path: 'balance', component: BalanceComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'money-transfer', component: MoneyTransferComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
