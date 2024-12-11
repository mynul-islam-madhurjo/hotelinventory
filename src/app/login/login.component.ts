import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username: string = 'admin@gmail.com';
  password: string = 'admin123';
  loginError: boolean = false;
  showPassword = false;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/rooms']);
    } else {
      this.loginError = true;
    }
  }

  // Clear any existing auth when component initializes
  ngOnInit(): void {
    this.authService.logout();
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
