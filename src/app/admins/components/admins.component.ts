import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';
import { IonicModule } from '@ionic/angular';
import { IonLabel, IonCard, IonButton, IonHeader } from "@ionic/angular/standalone";
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss'],
  providers: [NFC, Ndef],
  imports: [IonicModule, FormsModule, HeaderComponent]
})
export class AdminsComponent implements OnInit {
  expectedAmount: number = 0;
  receivedAmount: number | null = null;
  transactionStatus: string = '';
  titlePage: string = 'Gestion du compte';
  constructor(private nfc: NFC, private ndef: Ndef) {}
  ngOnInit(): void {}

  startListening() {
    if (this.expectedAmount <= 0) {
      alert("Veuillez entrer un montant attendu valide !");
      return;
    }

    this.nfc.addNdefListener().subscribe((event) => {
      try {
        const tagContent = event.tag.ndefMessage[0];
        const message = this.nfc.bytesToString(tagContent.payload).substring(3);
        const parsed = JSON.parse(message);
        this.receivedAmount = parsed.amount;

        if (this.receivedAmount === this.expectedAmount) {
          this.transactionStatus = 'Transaction réussie !';
          alert(`Montant reçu : ${this.receivedAmount}€ - Transaction validée`);
        } else {
          this.transactionStatus = 'Montant incorrect, transaction refusée.';
          alert(`Montant incorrect : ${this.receivedAmount}€`);
        }
      } catch (err) {
        console.error('Erreur lors de la réception NFC:', err);
        alert('Erreur lors de la réception NFC');
      }
    });
  }

  logout() {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  }
}
