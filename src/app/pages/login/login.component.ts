import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private snackbar: MatSnackBar
  ) {}
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
    this.user = {
      usuario: '',
      password: '',
    };
  }
  login(): void {
    this.authService.login(this.user.usuario, this.user.password).subscribe({
      next: () => {
        this.router.navigate(['/welcome']);
      },
      error: () =>
        this.snackbar.open('ocurrio un error', 'Aceptar', {
          duration: 10000,
        }),
    });
  }
}
