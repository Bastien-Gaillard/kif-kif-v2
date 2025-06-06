import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { storefrontOutline, cardOutline, personOutline } from 'ionicons/icons';
import {
  IonTabs,
  IonTabButton,
  IonRouterOutlet,
  IonTabBar,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTabButton,
    IonRouterOutlet,
    IonTabBar,
    IonIcon,
    IonLabel,
  ],
})
export class TabsPage {
  constructor() {
    addIcons({
      cardOutline: cardOutline,
      storefrontOutline: storefrontOutline,
      personOutline: personOutline,
    });
  }


}
