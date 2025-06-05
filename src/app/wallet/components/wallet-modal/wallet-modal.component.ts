import { Component } from '@angular/core';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';
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

  constructor(private nfc: NFC, private ndef: Ndef) {}
  async startSending() {
    const automaticAmount = 20;
    const message = this.ndef.textRecord(
      JSON.stringify({ amount: automaticAmount })
    );

    this.nfc
      .share([message])
      .then(() => {
        alert(`Montant de ${automaticAmount}€ envoyé avec succès !`);
      })
      .catch((err) => {
        alert("Erreur lors de l'envoi via NFC");
        console.error(err);
      });
  }
}
