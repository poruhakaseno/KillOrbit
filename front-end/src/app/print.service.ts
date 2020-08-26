import { Injectable } from '@angular/core';
import { Ptn } from './ptn';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  ptnDetail;
  templateContent;
  pathToBarcodeTemplate='/assets/barcode.html'
  constructor(private http: HttpClient) { 
    console.log("PrintService Constructor")
    this.prepareTemplate();

  }

  printPTNBarCode(ptnDetail : Ptn) {
    console.log("HELLO FROM printPTNBarCode");
 
    let Pagelink = "about:blank";
    console.log("Content " + this.preparePTNBarCode(ptnDetail));       
    console.log("before window.open")
    var pwa = window.open(Pagelink, "_new");
    console.log("after window.open")    
    pwa.document.open();


    pwa.document.write(this.preparePTNBarCode(ptnDetail));
    pwa.document.close();
  }

  preparePTNBarCode(ptnDetail : Ptn) {

    // if(!this.templateContent) {
    //   this.templateContent = this.prepareTemplate();
    // }

    return this.populateBarCodeValueForCurrentPTN(ptnDetail,this.templateContent);
    // this.ptnContent = dtn


    // pwa.document.write(this.prepareTemplate(ptnDetail));
    // pwa.document.close();
  }

  prepareTemplate(){
    console.log("prepareTemplate");
      this.http.get(this.pathToBarcodeTemplate, {responseType: 'text'})
        .subscribe(
          (data : any) => {
            this.templateContent = data;
            console.log(this.templateContent);
          });    
  }

  populateBarCodeValueForCurrentPTN(ptnDetail : Ptn,templateContent : any){
    templateContent = templateContent.replace("$(Supplier)",ptnDetail.supplier);
    templateContent = templateContent.replace("$(ShipTo)",ptnDetail.shipTo);
    templateContent = templateContent.replace("$(ShipTo)",ptnDetail.shipTo);
    templateContent = templateContent.replace("$(PO)",ptnDetail.poNumber);
    templateContent = templateContent.replace("$(PTNNumber)",(ptnDetail.ptnNumber as any).toUpperCase());
    return templateContent
  }
}
