import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Points } from './models/points.model';
import { ActivatedRoute } from '@angular/router';
import { cardStore } from './cards.shop';
import { addIcons } from 'ionicons';
import { pricetagsOutline, timeOutline,  } from "ionicons/icons";

@Component({
  selector: 'app-card',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: 'card.page.html',
  styleUrls: ['card.page.scss'],
  standalone: true
})
export class CardPage {
  titlePage: string = 'Ma carte de fidelité';
  icon: null = null;
  globalPoints!: Points.GetGlobalPoints;
  alertButtons = ['Ok'];
  constructor(private route: ActivatedRoute) {
    addIcons({
      "pricetags-outline": pricetagsOutline,
      "time-outline": timeOutline,
    });
  }
  public store = inject(cardStore);
  ngOnInit() {
    console.log("error", this.store.globalPoints())
  }
}
