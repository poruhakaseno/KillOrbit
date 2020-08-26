import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service'
import {Ptn} from './../ptn'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  allItems;
  filteredItems;
  public searchPattern = "";
  data : any;
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.allItems=[];
    //this.GetMockDataItems();
  }

  GetMockDataItems(){

    console.log("Run GetMcokDataItems");
    this.allItems = [
      {
        ptnNumber:"PTN1",
        status:"Staged",
        supplier:"Saarah McMillon",
        shipTo:"HRH",
        lastUpdate:"01/01/2018",
        poNumber:"451234567"
      },
      {
        ptnNumber:"PTN2",
        status:"Received",
        supplier:"Microsoft",
        shipTo:"VTT",
        lastUpdate:"01/23/2019",
        poNumber:"451234568"
      },
      {
        ptnNumber:"PTN3",
        status:"Staged",
        supplier:"Nike",
        shipTo:"TX",
        lastUpdate:"01/08/2019",
        poNumber:"451234569"
      }
    ];
  }

  getDataFromEndPoint(){
    this.allItems = [];

    console.log(this.searchPattern);
    
    this.apiService.getPTN()
    .subscribe((data:any)=>{
      this.allItems=data.map(e=> {
          return {
            ptnNumber: e["ptn"],
            status: e["upstatus"],
            supplier: e["supplier"],
            shipTo: e["shipto"],
            // lastUpdate: data["ptnNumber"],
            poNumber: e["po"],
          }}).filter(ptn=>{
            console.log(ptn)
            if(!this.searchPattern) return true;
            else if(!ptn.ptnNumber) return false
            return (ptn.ptnNumber as any).indexOf(this.searchPattern) != -1
          })
      })
 

    // );

    console.log(this.allItems)
  }

  testPost(){
    this.apiService.createPTN({}).subscribe(data=>console.log(data))
  }

}
