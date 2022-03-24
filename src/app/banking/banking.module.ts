import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingRoutingModule } from './banking-routing.module';
import { SavingComponent } from './saving/saving.component';
import { CurrentComponent } from './current/current.component';
import {DirectivesModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    SavingComponent,
    CurrentComponent
  ],
  imports: [
    DirectivesModule,
    CommonModule,
    HttpClientModule,
    BankingRoutingModule
  ]
})
export class BankingModule { }
