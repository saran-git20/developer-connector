import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { DeveloperComponent } from './developer/developer.component';
import { ListComponent } from './developer/list/list.component';
import { FormComponent } from './login/form/form.component';
import { SubListComponent } from './developer/list/sub-list/sub-list.component';

import {MiddlewareInterceptor} from './middleware.interceptor';
import {DirectivesModule} from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DeveloperComponent,
    ListComponent,
    FormComponent,
    SubListComponent
  ],
  imports: [
    DirectivesModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:MiddlewareInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
