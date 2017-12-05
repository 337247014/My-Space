import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sub-header',
  templateUrl:'./subheader.html',
  styleUrls:[],
})
export class SubheaderComponent implements OnInit{ 
   @Input() backgroundImage: any;
   @Input() headerText:string;

    constructor(
        private router: Router) {
    }

    ngOnInit(): void {
      //  this.backgroundImage = "/app/content/images/home-header.jpg";
    }

}