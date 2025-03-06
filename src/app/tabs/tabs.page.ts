import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { storefrontOutline, cardOutline, personOutline } from "ionicons/icons";
@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],
    standalone: false
})
export class TabsPage {

  constructor() {
      addIcons({
          "card-outline": cardOutline,
          "storefront-outline": storefrontOutline,
          "person-outline": personOutline,
        });
  }

}
