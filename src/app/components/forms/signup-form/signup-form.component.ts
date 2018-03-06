import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  @Output() onSignUpFormSubmit = new EventEmitter<object>();
  @Input() feedbackEnabled;
  @Input() error;
  @Input() processing;

  username: String;
  password: String;

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
      this.onSignUpFormSubmit.emit(data);
    }
  }
}

