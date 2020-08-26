import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBasePath
  constructor(private http: HttpClient) {
    this.apiBasePath = "https://killorbitbackend.azurewebsites.net"
  }

  getPTN(){
    return this.http.get(this.apiBasePath+"/api/ptn");
  }

  getPTNDetail(id){
    return this.http.get(this.apiBasePath+"/api/ptn/" + id);
  }

  createPTN(ptnDto){
    console.log("createPTN");
    console.log(ptnDto);
    return this.http.post(this.apiBasePath+"/api/ptn",ptnDto);
  }
}
