import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
// common components
import { CommonComponentsModule } from './common/components/common-components.module';
import { AuthGuard } from './common/guards/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// services
import { AuthenticationService, UserService } from './common/services/index';
import { HomeService } from './home/home.service';

// fack
import { fakeBackendProvider } from './common/helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, CommonComponentsModule, AppRoutingModule
  ],
  providers: [HomeService, AuthGuard, AuthenticationService, UserService, fakeBackendProvider, MockBackend, BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
