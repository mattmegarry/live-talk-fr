import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'login',  component: AuthLoginPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: AuthSignupPageComponent, canActivate: [ RequireAnonGuardService ] },
  /* { path: 'page',  component: ... , canActivate: [ RequireUserGuardService ] }, */
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
