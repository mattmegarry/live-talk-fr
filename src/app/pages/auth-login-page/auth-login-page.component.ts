import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrls: ['./auth-login-page.component.css']
})
export class AuthLoginPageComponent implements OnInit {
  error;
  processing;
  feedbackEnabled;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  checkUser(data) {
    this.authService.login(data)
      .then((result) => {
        this.router.navigate(['/']) //Navigate to HOME FOR NOW...
      })
      .catch((err) => {
        this.error = err.error.error;
        this.processing = false;
        this.feedbackEnabled = false;
      });    
  }
}
