import { Injectable } from '@angular/core';
import {Router , CanActivate} from '@angular/router';
import {GlobalService} from './global.service';

@Injectable({
  providedIn: 'root'
})

export class CanActivateService implements CanActivate {


  constructor(public route:Router,public global:GlobalService) {


   
  }

  canActivate(): boolean  {
    if(this.global.token){
    return true;
  }
  else{
    this.route.navigate(['/auth/login']);
    return false;
  }
}
}
