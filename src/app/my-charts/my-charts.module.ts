import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { MyChartsRoutingModule } from './my-charts-routing.module';
import { CommonComponentsModule } from '../common/components/common-components.module';
import { MyChartsComponent } from './my-charts.component';

@NgModule({
  imports: [
    CommonModule,
    MyChartsRoutingModule,
    CommonComponentsModule,
    ChartsModule
  ],
  declarations: [MyChartsComponent]
})
export class MyChartsModule { }
