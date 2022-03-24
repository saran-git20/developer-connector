import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavingComponent } from './saving/saving.component';
import { CurrentComponent } from './current/current.component';

const routes: Routes = [
  {path:'saving',component:SavingComponent},
  {path:'current',component:CurrentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingRoutingModule { }
