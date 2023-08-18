import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {

  public loginForm: FormGroup;
  constructor(
    private router: Router

  ) {
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      firstName: new FormControl(
        null,
        [
          Validators.required,
          Validators.maxLength(100)
        ]
      ),
      registerCode: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(100)
        ])
    });
  }

  submitLoginForm() {

        this.router.navigate(['/AdminPanel']);
      }
    }

