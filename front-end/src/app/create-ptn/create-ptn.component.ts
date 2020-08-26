import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from './../api.service'
import {Ptn} from './../ptn'
import { ActivatedRoute,Router,RouterModule } from '@angular/router';


@Component({
  selector: 'app-create-ptn',
  templateUrl: './create-ptn.component.html',
  styleUrls: ['./create-ptn.component.css']
})
export class CreatePTNComponent implements OnInit {

  public ptnNumber;
  public po;
  public status;
  public supplier;
  public shipto;
  public ptnObj : Ptn
  public isPTNCreated = false;
  constructor(private apiService : ApiService, private router : Router) { }

  ngOnInit() {
  }


  onCreate(){
    // this.apiService.createPTN(      {
    //   ptn:"ptn00000010",
    //   upstatus:"New",
    //   supplier:"Mobil1",
    //   shipto:"VTT",
    //   po:"451234568"
    // }).subscribe(data=>console.log(data));
    
    if (this.isFieldValid())
      alert("All fields are required")
    else {
      this.isPTNCreated = true;
      this.apiService.createPTN({
        ptn: this.ptnNumber,
        upstatus: this.status,
        supplier: this.supplier,
        shipto: this.shipto,
        po: this.po
      }).subscribe
        (
        () => setTimeout(() => { this.router.navigateByUrl("/displayPTN/" + this.ptnNumber); }, 3000)
        );
    }    
    
  }

  isFieldValid(){
    return !this.ptnNumber || !this.po || !this.status || !this.supplier || !this.shipto;
  }
}
