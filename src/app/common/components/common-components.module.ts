import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent, SubheaderComponent, SiteFooterComponent} from './index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigationComponent, SubheaderComponent, SiteFooterComponent, CommonModule, RouterModule],
  declarations: [NavigationComponent, SubheaderComponent, SiteFooterComponent]
})
export class CommonComponentsModule { }
