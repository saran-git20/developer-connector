import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sublist',
  templateUrl: './sublist.component.html',
  styleUrls: ['./sublist.component.css']
})
export class SublistComponent implements OnInit {

  @Input('subList')subject:any
  constructor() { }

  ngOnInit(): void {
  }
  public flag:boolean=true;

  getFlagHandler(){
    this.flag=false;
  }  

}
