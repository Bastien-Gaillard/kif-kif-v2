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
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';
import { IonicModule } from '@ionic/angular';
import {
  IonLabel,
  IonCard,
  IonButton,
  IonHeader,
} from '@ionic/angular/standalone';
import { AuthService } from 'src/app/shared/services/auth.service';
import { profilStore } from '../profil.store';

@Component({
  standalone: true,
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  providers: [NFC, Ndef],
  imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export class ProfilComponent implements OnInit {
  userForm!: FormGroup;
  isEditing = false;
  store = inject(profilStore);
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

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
      this.ngOnInit(); // reset the form if cancel
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Appelle ici ton service pour envoyer la modification (à implémenter)
      console.log('Nouvelle valeur', this.userForm.value);
      this.isEditing = false;
    }
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/auth']);
  }
}
