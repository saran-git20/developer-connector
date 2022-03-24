import { Component, OnInit, Input,Output,EventEmitter,ContentChild, OnChanges } from '@angular/core';
import {SubListComponent} from './sub-list/sub-list.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges{

  @Input('globalList')list:any;
  @Input('flag')flag:boolean=false;
 
  constructor() { 
      console.log(this.list);
  }

  ngOnChanges():void {
        console.log(this.list);
  }

  ngOnInit(): void {
    alert("ngOnINit");

  }

  ngOnDestroy():void{
    alert("ngOndestroy")
  }

  @ContentChild("sub") sub!:SubListComponent;
  getFlagClickHandler(){
    this.sub.getFlagHandler();
  }
  
  @Output() deleteDetails = new EventEmitter();
  onDelete(id:number){
    alert(id);
    this.deleteDetails.emit(id);
  }


}
