import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandImagesRoutingModule } from './brand-images-routing.module';
import { CommonComponentsModule } from '../common/components/common-components.module';
import {BrandImagesComponent} from './brand-images.component';

@NgModule({
  imports: [
    CommonModule,
    BrandImagesRoutingModule,
    CommonComponentsModule
  ],
  declarations: [BrandImagesComponent]
})
export class BrandImagesModule { }
