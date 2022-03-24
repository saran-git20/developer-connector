import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';  
import {Router} from '@angular/router';
import {GlobalService} from '../global.service';
import {CanComponentDeactivate} from '../can-deactivate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,CanComponentDeactivate {

  public registerForm:FormGroup;
  public canLeave: boolean = false;
  public passwordPattern:string='';
  constructor(public http:GlobalService,public router:Router,public formBuilder:FormBuilder) {
    this.passwordPattern='[0-9a-zA-Z]{6,12}';
    this.registerForm= this.formBuilder.group({
      fullName:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required]],
      password:['',[Validators.pattern(this.passwordPattern),Validators.required]],
      password2:['',[Validators.required]]
    })
   }

   get f() { return this.registerForm.controls; }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe((obj)=>{
      if(obj.fullName == "salman"){

      }
    })
  }

   onSubmitHandler(){
     console.log(this.registerForm.value);
     if(this.registerForm.value.password !=this.registerForm.value.password2){
       this.registerForm.patchValue({
         password:'',
         password2:''
       });
       alert("password not match");
       return;
     }
     const{fullName,email,password}=this.registerForm.value;
     this.http.postRegister({fullName,email,password}).subscribe(()=>{
      this.registerForm.reset({
        email:"salman@gmail.com"
      });
       this.router.navigate(['/login']); 
     },(error)=>{
      console.log("error");
     })
    

   }
}
