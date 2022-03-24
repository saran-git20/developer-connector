import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.css']
})
export class SubListComponent implements OnInit {

  public flag:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  
  getFlagHandler(){
    this.flag=!this.flag;
  }

}
