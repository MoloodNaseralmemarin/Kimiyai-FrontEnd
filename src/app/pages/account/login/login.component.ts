import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {

  loginForm: FormGroup;
  constructor(
    private router: Router

  ) {
  }
  ngOnInit(): void {
    this.createForm();

  }
  private createForm(){
    this.loginForm = new FormGroup({
      registerCode: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(100)
        ])
    });
  }

  public login() {
    this.router.navigate(['/AdminPanel']);
  }
    }

