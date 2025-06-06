import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonLabel, IonCard, IonButton, IonHeader } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { card, cardOutline, information, informationOutline, logOut, logOutOutline, scanOutline } from 'ionicons/icons';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ShopPage } from "../../shop/shop.page";
import { ShopComponent } from './shop/shop.component';

@Component({
  standalone: true,
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss'],
  imports: [IonicModule, FormsModule, HeaderComponent, RouterModule, ShopPage, ShopComponent],
})
export class AdminsComponent implements OnInit {
  expectedAmount: number = 0;
  receivedAmount: number | null = null;
  transactionStatus: string = '';
  titlePage: string = 'Gestion du compte';
  constructor() {
    addIcons({
      'log-out-outline': logOutOutline,
      'scan-outline': scanOutline,
      'information-outline': informationOutline,
      'card-outline': cardOutline,
    });
  }
  ngOnInit(): void {}

  startListening() {
    if (this.expectedAmount <= 0) {
      alert("Veuillez entrer un montant attendu valide !");
      return;
    }

  }

  logout() {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  }
}
