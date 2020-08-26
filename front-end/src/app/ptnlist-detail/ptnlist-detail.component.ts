import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ptn } from './../ptn';
import { ApiService } from './../api.service';
import { PrintService } from './../print.service';

@Component({
  selector: 'app-ptnlist-detail',
  templateUrl: './ptnlist-detail.component.html',
  styleUrls: ['./ptnlist-detail.component.css']
})
export class PTNListDetailComponent implements OnInit {

  @Input() ptnListDetail: Ptn;
  @Input() testInputString: string;
  public sub;
  public ptnDetail;
  public ptnNumber;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private printService : PrintService) { }

  ngOnInit() {
    // this.ptnDetail =       {
    //   ptnNumber:"PTN1",
    //   status:"Staged",
    //   supplier:"Saarah McMillon",
    //   shipTo:"HRH",
    //   lastUpdate:"01/01/2018",
    //   poNumber:"451234567"
    // };

    this.sub = this.route.params.subscribe(params => {
      console.log(params.id)
      this.ptnNumber = params.id
   });


   this.apiService.getPTNDetail(this.ptnNumber)
    .subscribe((data : any)=> {
                        data.forEach(e=>
                          {
                            this.ptnDetail = {
                              ptnNumber: e["ptn"],
                              status: e["upstatus"],
                              supplier: e["supplier"],
                              shipTo: e["shipto"],
                              // lastUpdate: data["ptnNumber"],
                              poNumber: e["po"],
                            }
                          }
                        )
                      }
              )
  }

  ngOnChanges() {
    //this.returnedString = 'number'+this.myStringArray[Number(this.inputNumber)];   
  }

  printPTN() {
    this.printService.printPTNBarCode(this.ptnDetail);
  }

  
}
