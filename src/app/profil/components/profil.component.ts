import { CommonModule } from '@angular/common';
import { Component, OnInit, effect, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import {
  IonLabel,
  IonCard,
  IonButton,
  IonHeader,
} from '@ionic/angular/standalone';
import { AuthService } from 'src/app/shared/services/auth.service';
import { profilStore } from '../profil.store';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { QueryService } from '../services/query.service';

@Component({
  standalone: true,
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule, HeaderComponent],
})
export class ProfilComponent implements OnInit {
  userForm!: FormGroup;
  isEditing = false;
  store = inject(profilStore);
  titlePage: string = 'Profil';
  icon: string = 'log-out-outline';
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private queryService: QueryService,
    private alertController: AlertController,
  ) { }

  updateFormEffect = effect(() => {
    const user = this.store.users();
    if (user && Object.keys(user).length > 0 && this.userForm) {
      this.userForm.patchValue({
        lastname: user.lastname || '',
        firstname: user.firstname || '',
        email: user.email || '',
        birthday: user.birthday || '',
      });
    }
  });

  ngOnInit() {
    this.userForm = this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: [{ value: '', disabled: true }],
      birthday: [''],
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      window.location.reload();
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.queryService.updateUserInformation(this.authService.getUserId(), this.userForm.value)
  .subscribe({
    next: (response) => {
      console.log('Mise à jour réussie', response);
      this.isEditing = false;
    },
    error: async (error) => {
      const alert = await this.alertController.create({
        header: 'Erreur',
        message: error.error?.message || 'Une erreur est survenue.',
        buttons: ['OK']
      });

      await alert.present();
    }
  });

    }
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/auth']);
  }
}
