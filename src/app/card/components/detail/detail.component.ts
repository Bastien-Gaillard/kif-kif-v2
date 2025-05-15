import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IonicModule, IonSearchbar, NavController } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { cardStore } from '../../cards.store';
import { FormsModule } from '@angular/forms';
import { storefrontOutline, cardOutline,  } from "ionicons/icons";
import { addIcons } from 'ionicons';
import { Platform } from '@ionic/angular/standalone';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  imports: [IonicModule, HeaderComponent, FormsModule],
  standalone: true,
})
export class DetailComponent implements OnInit {
  searchQuery: string = '';
  titlePage: string = 'Mes points';
  icon: string = 'chevron-back-outline';
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  public store = inject(cardStore);
  ngOnInit() {}

  constructor(private navCtrl: NavController, private platform: Platform,  private location: Location) {
    addIcons({
      "storefront-outline": storefrontOutline,
      "cardOutline": cardOutline,
    });

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.location.back();
    });
  }

  concatCategories(categories: { categories: { name: string } }[]): string {
    if (Array.isArray(categories)) {
      return categories.map((category) => category.categories.name).join('/');
    }
    return '';
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.store.filterShopsForCurrentPoints(query);
  }
}
