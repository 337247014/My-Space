import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../common/guards/auth.guard';
import { MyChartsComponent } from './my-charts.component';

const routes: Routes = [
  { path: '', component: MyChartsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyChartsRoutingModule { }
