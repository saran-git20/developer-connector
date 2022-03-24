import { Component, OnInit } from '@angular/core';
import {BankingRequestService} from '../banking-request.service';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  constructor(public http:BankingRequestService) { }

  ngOnInit(): void {
  }

  onImagePicker(event:any){
    const file = (event.target as HTMLInputElement).files;
    console.log(file);
    let files = file && file.length>0 && file[0];
    this.http.uploadPost(files).subscribe((response)=>{

    },(error)=>{

    })
  }

}
