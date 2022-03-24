import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';


export interface CanComponentDeactivate
{
  canLeave: boolean;
}



@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<CanComponentDeactivate> {

  constructor() { }

  canDeactivate(component: CanComponentDeactivate){
      if(component.canLeave){
        return true;
      }
      else{
        return confirm("Do you want leave the current page");
      }
  }
}
