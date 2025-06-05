import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Points } from './models/points.model';
import { ActivatedRoute, Router } from '@angular/router';
import { cardStore } from './cards.store';
import { addIcons } from 'ionicons';
import { pricetagsOutline, timeOutline, cardOutline } from 'ionicons/icons';
import { Platform } from '@ionic/angular/standalone';
import { App } from '@capacitor/app';
import { GeolocationService } from '../services/geolocation.service';
import { IonicModule, ModalController } from '@ionic/angular';
import { WalletModalComponent } from '../wallet/components/wallet-modal/wallet-modal.component';
@Component({
  selector: 'app-card',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: 'card.page.html',
  styleUrls: ['card.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class CardPage {
  titlePage: string = 'Ma carte de fidelité';
  icon: null = null;
  globalPoints!: Points.GetGlobalPoints;
  isWalletOpen = false;

  alertButtons = ['Ok'];
  constructor(
    private route: ActivatedRoute,
    private platform: Platform,
    private geolocationService: GeolocationService,
    private router: Router
  ) {
    addIcons({
      pricetagsOutline: pricetagsOutline,
      timeOutline: timeOutline,
      cardOutline: cardOutline,
    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      App.exitApp();
    });
  }
  public store = inject(cardStore);

  ngOnInit() {
    this.geolocationService.getCurrentPosition();
    console.log(
      'Position actuelle:',
      this.geolocationService.getCurrentPosition()
    );
    this.geolocationService.watchPosition();
    console.log('Position actuelle:', this.geolocationService.watchPosition());
  }

  async openWallet() {
    console.log('openWallet');
    await this.router.navigate(['/wallet']);
  }

  test() {
    console.log('Bouton cliqué !');
  }
}
