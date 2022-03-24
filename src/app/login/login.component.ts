import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {GlobalService} from '../global.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentialsFlag:boolean=false;
  public fullName:string="salman";
  constructor(public router:Router,public global:GlobalService) { }

  ngOnInit(): void {
  }

  onSubmitHandler(obj:any){
     this.global.getRegisterList().subscribe((response)=>{
          console.log(response);
      let listDetails:any=response;
      let loginFlag=false;
      for(let i=0;i<listDetails.length;i++){
        if(listDetails[i].email.includes(obj.email) && listDetails[i].password.includes(obj.password)){
          this.global.token=true;
          this.router.navigate(['/dashboard']);
          loginFlag=true;
          break;
        }

      }
      if(!loginFlag){
        alert("data not found");
        this.global.token = false;
      }
    

     },(error)=>{
          console.log(error);
          this.global.token = false;
     }); 

    // this.router.navigate(['/dashboard']);
  }

}
