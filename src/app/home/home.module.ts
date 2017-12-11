import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CommonComponentsModule } from '../common/components/common-components.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonComponentsModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
