import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { sharedStore } from '../../store';

@Component({
  selector: 'app-wallet-modal',
  templateUrl: './wallet-modal.component.html',
  styleUrls: ['./wallet-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class WalletModalComponent {
  store = inject(sharedStore);
  totalAmount: number = 0;
  discountApplied: number = 0;
  selectedOffers: string[] = [];
  constructor() {}

  ngOnInit(): void {
  }
  // Fonction pour calculer la réduction en fonction de l'offre choisie
  calculateDiscount() {
    this.discountApplied = 0; // Réinitialiser

    if (!this.selectedOffers || this.selectedOffers.length === 0) return;

    for (const offer of this.selectedOffers) {
      switch (offer) {
        case 'discount-20':
          // Appliquer 20% de réduction
          this.discountApplied += this.totalAmount * 0.2;
          break;

        case 'points-5':
          // Appliquer 5€ si total >= 15€
          if (this.totalAmount >= 15) {
            this.discountApplied += 5;
          }
          break;

        case 'points-1':
          // Appliquer 1€ si total >= 10€
          if (this.totalAmount >= 10) {
            this.discountApplied += 1;
          }
          break;
      }
    }
  }

  // Fonction pour soumettre le paiement après avoir calculé la réduction
  submitPayment() {
    const finalAmount = this.totalAmount - this.discountApplied;
    console.log(`Montant final après réduction : ${finalAmount}€`);

    // Tu peux ici envoyer les données à ton serveur pour traiter le paiement avec Stripe
    // ou effectuer d'autres opérations comme la mise à jour du solde de points du client.
  }

  updateOffer() {
    console.log("Offres sélectionnées :", this.selectedOffers);
  }
}
