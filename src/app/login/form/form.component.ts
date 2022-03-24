import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public credentialsFlag:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitHandler(form:NgForm){
    if(form.invalid){
      this.credentialsFlag=true;
      return;
    }
    this.credentialsFlag=false;

    let obj={
      email:form.value.email,
      password:form.value.password
    };

 }
}
