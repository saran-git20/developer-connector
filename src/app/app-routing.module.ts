import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeveloperComponent } from './developer/developer.component';
import {CanDeactivateService} from './can-deactivate.service';
import {CanActivateService} from './can-activate.service';
const routes: Routes = [
{
  path:'',component:SectionComponent
},
{
  path:'auth',children:[
    {
      path:'login',component:LoginComponent
    },
    {
      path:'register',component:RegisterComponent ,
       canDeactivate:[CanDeactivateService]
    }
  ]
}
,{
  path:'dashboard',component:DashboardComponent , canActivate:[CanActivateService]
},{
  path:'developer/:id',component:DeveloperComponent,
},
{path:'banking',loadChildren:()=>import('./banking/banking.module').then(m=>m.BankingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
