import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../common/guards/auth.guard';
import {BrandImagesComponent} from './brand-images.component';

const routes: Routes = [
  {path: '', component: BrandImagesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandImagesRoutingModule { }
