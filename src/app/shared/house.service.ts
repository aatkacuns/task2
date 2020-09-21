import { Injectable } from '@angular/core';
import { House } from './house.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  formData:House = {
    HId: null,
    HouseNumber: null,
    HouseCity: null,
    HouseCountry: null,
    HousePostIndex: null,
  
  }
  readonly rootURL = 'http://localhost:50271/api'
  list : House[];

  constructor(public http:HttpClient) { }

  postHouse(){
  return this.http.post(this.rootURL+'/House', this.formData);
  }

  putHouse(){
    return this.http.put(this.rootURL+'/House/'+this.formData.HId, this.formData);
    }
    deleteHouse(id){
      return this.http.delete(this.rootURL+'/House/'+id);
      }

  refreshList(){
    this.http.get(this.rootURL+'/House')
    .toPromise()
    .then(res => this.list = res as House[]  );
  }
}
