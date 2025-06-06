import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-wallet-modal',
  templateUrl: './wallet-modal.component.html',
  styleUrls: ['./wallet-modal.component.scss'],
  imports: [IonicModule]
})
export class WalletModalComponent {
  sentAmount: number | null = null;

  async startSending() {
    const automaticAmount = 20;
  }
}
