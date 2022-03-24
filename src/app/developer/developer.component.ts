import { Component, OnInit,ViewChild,ContentChild } from '@angular/core';
import {GlobalService} from '../global.service';
import {ListComponent} from './list/list.component';
import {SubListComponent} from './list/sub-list/sub-list.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public list:any;
  public flag:boolean=true;
  constructor(public activatedRoute:ActivatedRoute,public global:GlobalService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((obj)=>{
      console.log(obj);
    })
     this.getDevelopers();

  }

  getDevelopers(){
    this.global.getDevelopers().subscribe((result)=>{
      this.list=result;
      this.getListDetails();
    })
  }

  @ContentChild("sub") sub!:SubListComponent;
  getFlagClickHandler(){
    alert("coming");
    this.sub.getFlagHandler();
  }

  deleteDeveloper(id:number){
    this.global.deleteDevelopers(id).subscribe((result)=>{
       this.getDevelopers();
    },(error)=>{

           console.log(error);
    })
  }

  @ViewChild("prj") prj!:ListComponent;
  getListDetails(){
    this.prj.onDelete(2);
  }

}
