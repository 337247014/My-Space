import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppRoutingModule } from './app-routing.module';
//common components
import { AuthGuard } from './common/guards/auth.guard';
import {SubheaderComponent,SiteFooterComponent,NavigationComponent} from './common/components/index';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

//services
import { AuthenticationService, UserService } from './common/services/index';
import { HomeService } from './home/home.service';

//fack
import { fakeBackendProvider } from './common/helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { BrandImagesComponent } from './brand-images/brand-images.component';
import { MyChartsComponent } from './my-charts/my-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubheaderComponent,
    SiteFooterComponent,
    NavigationComponent,
    LoginComponent,
    BrandImagesComponent,
    MyChartsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,ChartsModule,AppRoutingModule
  ],
  providers: [HomeService,AuthGuard,AuthenticationService,UserService,fakeBackendProvider,MockBackend,BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
