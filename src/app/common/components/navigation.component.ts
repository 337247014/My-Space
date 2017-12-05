import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'navigation',
  templateUrl:'./navigation.html',
  styleUrls:[],
})
export class NavigationComponent implements OnInit{ 
    hasAnimate: boolean = false;
    hasClick:boolean=false;

    constructor(
        private router: Router) {
    }

    ngOnInit():void{
        this.hasAnimate = false;
        this.hasClick=false;
    }

    addAnimation():void{
        this.hasClick = true;
        if(this.hasAnimate){
            this.hasAnimate = false;
        }else{
            this.hasAnimate = true;
        }
        
    }




}