import { Component, OnInit, Input } from '@angular/core';
import { Ptn } from './../ptn'

@Component({
  selector: 'app-ptnlist',
  templateUrl: './ptnlist.component.html',
  styleUrls: ['./ptnlist.component.css']
})
export class PTNListComponent implements OnInit {

  @Input() ptnListDetail: Ptn[];
  constructor() { }

  ngOnInit() {
    console.log("PRint from ptnlist.component");
    console.log(this.ptnListDetail);
  }
  

}
