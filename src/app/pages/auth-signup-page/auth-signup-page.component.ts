import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup-page',
  templateUrl: './auth-signup-page.component.html',
  styleUrls: ['./auth-signup-page.component.css']
})
export class AuthSignupPageComponent implements OnInit {
  error;
  processing;
  feedbackEnabled;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  checkUser(data) {
    this.authService.signup(data)
      .then((result) => {
        this.router.navigate(['/'])
      })
      .catch((err) => {
        this.error = err.error.error;
        this.processing = false;
        this.feedbackEnabled = false;
      });    
  }

}
