import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './common/guards/auth.guard';

import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import { MyChartsComponent } from './my-charts/my-charts.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'images', loadChildren: 'app/brand-images/brand-images.module#BrandImagesModule'},
    { path: 'chart', component: MyChartsComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }