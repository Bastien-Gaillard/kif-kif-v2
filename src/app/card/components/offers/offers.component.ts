import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { addIcons } from 'ionicons';
import { pricetagsOutline } from 'ionicons/icons';
import { Platform } from '@ionic/angular/standalone';
import { Location } from '@angular/common';
import { cardStore } from '../../cards.store';
import { MetersPipe } from 'src/app/shared/pipes/meters.pipe';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  imports: [IonicModule, HeaderComponent, MetersPipe],
  standalone: true,
})
export class OffersComponent implements OnInit {
  constructor(private platform: Platform,  private location: Location) {
    addIcons({
      'pricetags-outline': pricetagsOutline,
    });
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.location.back();
    });
  }
  public store = inject(cardStore);
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  titlePage: string = 'Les offres à proximité';
  icon: string = 'chevron-back-outline';

  ngOnInit() {
    console.log("store", this.store.offers());
  }

  handleDistanceChange(event: CustomEvent) {
    const distance = event.detail.value;
    this.store.getOffers(distance);
    console.log('Distance changed:', distance, this.store.offers());
  }

  formatDateToFrench(dateInput: string | number | Date): string {
    const date = new Date(dateInput);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
    }).format(date);
  }
}
