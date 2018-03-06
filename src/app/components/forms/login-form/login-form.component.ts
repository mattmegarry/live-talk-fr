import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  @Output() onLoginFormSubmit = new EventEmitter<object>();
  @Input() feedbackEnabled;
  @Input() error;
  @Input() processing;

  username: String; //stays
  password: String; //stays

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    const data = {
      username: this.username,
      password: this.password
    };
    if (form.valid) {
      this.processing = true;
      this.onLoginFormSubmit.emit(data);
    }
  }
}




