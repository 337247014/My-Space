import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './common/guards/auth.guard';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
    { path: 'images', loadChildren: 'app/brand-images/brand-images.module#BrandImagesModule'},
    { path: 'chart', loadChildren: 'app/my-charts/my-charts.module#MyChartsModule' },
    { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }