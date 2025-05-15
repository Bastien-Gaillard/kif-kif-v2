import { Component } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  position: GeolocationPosition | null = null;

  constructor(
    private geolocationService: GeolocationService,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {

      this.loadPosition();
      this.startWatching();
    });
  }

  async loadPosition() {
    try {
      this.position =
        (await this.geolocationService.getCurrentPosition()) as GeolocationPosition;
      this.savePosition(this.position);
    } catch (error) {
      console.error(
        'Erreur lors de la récupération de la position dans AppComponent:',
        error
      );
    }
  }

  savePosition(position: GeolocationPosition) {
    localStorage.setItem('userPosition', JSON.stringify(position));
    console.log('Position sauvegardée dans le local storage.');
  }

  async startWatching() {
    try {
      const watchId = await this.geolocationService.watchPosition();
      console.log('Watch position démarré, id:', watchId);
    } catch (error) {
      console.error('Erreur lors du démarrage du watch:', error);
    }
  }
}
