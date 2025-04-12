import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onSubmit(form: NgForm) {
    const { email, password } = form.value;
    if (!email || !password) {
      this.snackBar.open('Email and password are required.', 'Close', { duration: 3000 });
      return;
    }
    this.authService.login(email, password).subscribe(admin => {
      if (admin.length) {
        localStorage.setItem('isLoggedIn', 'true');
        this.snackBar.open('Login successful!', 'Close', { duration: 2000 });
        this.router.navigate(['/home']);
      } else {
        this.snackBar.open('Incorrect email or password.', 'Close', { duration: 3000 });
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
