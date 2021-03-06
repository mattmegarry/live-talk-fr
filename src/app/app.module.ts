import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';

import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthLoginPageComponent } from './pages/auth-login-page/auth-login-page.component';
import { AuthSignupPageComponent } from './pages/auth-signup-page/auth-signup-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

import { SignupFormComponent } from './components/forms/signup-form/signup-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { PaperstacksComponent } from './components/paperstacks/paperstacks.component';
import { ExtractionsComponent } from './components/extractions/extractions.component';

const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'login',  component: AuthLoginPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: AuthSignupPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'dashboard',  component: DashboardPageComponent, canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthLoginPageComponent,
    AuthSignupPageComponent,
    DashboardPageComponent,
    SignupFormComponent,
    LoginFormComponent,
    PaperstacksComponent,
    ExtractionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
