import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BankingRequestService {

  constructor(public http:HttpClient) { }

  uploadPost(file:any){
    let formData = new FormData();
    formData.append('image',file)
    return this.http.post('http://localhost:4000',formData);
  }
}
