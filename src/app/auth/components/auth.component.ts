import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { IonHeader } from '@ionic/angular/standalone';
import { QueryService } from '../services/query.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export class AuthComponent implements OnInit {
  isLogin = true;
  authForm!: FormGroup;
  isAlertOpen = false;
  alertMessage = '';
  alertButtons = ['OK'];
  constructor(
    private fb: FormBuilder,
    private queryService: QueryService,
    private alertCtrl: AlertController,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      if (this.authService.getUserRoleId() == 1) {
        this.router.navigate(['/tabs', 'card']);
      } else {
        this.router.navigate(['/admins']);
      }
      return;
    }

    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      lastname: [''],
      firstname: [''],
      birthday: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      newsletter: [false],
      idRole: [1],
    });

    this.updateValidators();
  }

  toggleAuthMode() {
    this.isLogin = !this.isLogin;
    this.updateValidators();
  }

  updateValidators() {
    if (this.isLogin) {
      this.authForm.get('lastname')?.clearValidators();
      this.authForm.get('firstname')?.clearValidators();
      this.authForm.get('birthday')?.clearValidators();
    } else {
      this.authForm.get('lastname')?.setValidators([Validators.required]);
      this.authForm.get('firstname')?.setValidators([Validators.required]);
      this.authForm.get('birthday')?.setValidators([Validators.required]);
    }

    this.authForm.get('lastname')?.updateValueAndValidity();
    this.authForm.get('firstname')?.updateValueAndValidity();
    this.authForm.get('birthday')?.updateValueAndValidity();
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  onSubmit() {
    if (this.authForm.invalid) return;

    if (this.isLogin) {
      console.log('Connexion avec', this.authForm.value);
      this.queryService.loginUser(this.authForm.value).subscribe({
        next: (res: any) => {
          localStorage.setItem('authToken', res.body.token);
          console.log('Token reçu :', this.authService.getUserRoleId());
          if (this.authService.getUserRoleId() == 1) {
            this.router.navigate(['/tabs', 'card']);
          } else {
            this.router.navigate(['/admins/magasin']);
          }
        },
        error: async (err) => {
          console.error('Erreur lors de la création :', err);
          this.alertMessage = err.message || 'Une erreur est survenue';
          this.isAlertOpen = true;
          console.log(this.isAlertOpen);
        },
      });
    } else {
      console.log('Inscription avec', this.authForm.value);
      this.queryService.createUser(this.authForm.value).subscribe({
        next: (res) => {
          this.isLogin = true;

          this.authForm.patchValue({
            email: this.authForm.value.email,
            motDePasse: this.authForm.value.password,
          });

          this.authForm.patchValue({
            firstname: '',
            lastname: '',
            birthday: '',
            newsletter: false,
          });

          this.updateValidators();
        },
        error: (err) => {
          this.alertMessage = err.error.message || 'Une erreur est survenue';
          this.isAlertOpen = true;
        },
      });
    }
  }
  get lastname() {
    return this.authForm.get('lastname')!;
  }

  get firstname() {
    return this.authForm.get('firstname')!;
  }

  get birthday() {
    return this.authForm.get('birthday')!;
  }

  get email() {
    return this.authForm.get('email')!;
  }

  get password() {
    return this.authForm.get('password')!;
  }
}
