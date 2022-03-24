import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public fullName:string="salman";
  public token:boolean = false;
  constructor(public http:HttpClient) { }

  getChangeNameHandler(){
    this.fullName="Saran";
  }

  getDevelopers(){
    return this.http.get('http://localhost:3000/profile');
  }

  deleteDevelopers(id:number){
    return this.http.delete<{list:any}>(`http://localhost:3000/profile/${id}`);
  }


  
  postRegister(post:any){
    return this.http.post<{list:any}>('http://localhost:3000/posts',post);
  }


  getRegisterList(){
    return this.http.get<{list:any}>('http://localhost:3000/posts');
  }
  
}
