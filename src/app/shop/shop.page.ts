import { Component, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { HeaderComponent } from '../shared/components/header/header.component';
import { ActualityListComponent } from './components/actuality-list/actuality-list.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { FilterModalComponent } from '../shared/components/filter-modal/filter-modal.component';
import { Filter } from '../shared/models/filter.model';
import { ShopsStore } from './stores/shops.store';
import { filterOutline, newspaperOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
    selector: 'app-shop',
    templateUrl: 'shop.page.html',
    styleUrls: ['shop.page.scss'],
    imports: [
        IonicModule,
        HeaderComponent,
        ActualityListComponent,
        ShopListComponent,
    ],
    standalone: true,
})
export class ShopPage {
  public store = inject(ShopsStore);
  constructor(private modalController: ModalController) {
     addIcons({
          'filter-outline': filterOutline,
          'newspaper-outline': newspaperOutline,
        });
  }

  titlePage: string = 'Commerces et actualités';
  icon: null = null;
  selectedSegment: string = 'default';
  filterData = {
    category: null,
    distance: 5,
    promotions: false,
  };
  filterConfig: Filter.FilterConfig[] = [
    {
      key: 'category',
      type: 'select',
      label: 'Catégorie',
      options: [
        { label: 'Alimentation', value: 'Alimentation' },
        { label: 'Fleurs & Décoration', value: 'Fleurs & Décoration' },
      ],
      placeholder: 'Sélectionnez une catégorie',
    },
    {
      type: 'range',
      label: 'Distance (km)',
      key: 'distance',
      min: 0,
      max: 10,
      step: 1,
    },
    {
      type: 'select',
      label: 'Promotions',
      key: 'promotions',
      options: [
        { label: 'Produit offert', value: 'free' },
        { label: 'Réduction', value: 'reduce' },
      ],
      placeholder: 'Sélectionnez un type de promotion',
    },
  ];
  ngOnInit(): void {
  }
  onSegmentChange(event: any): void {
    this.selectedSegment = event.detail.value;
  }

  handleDistanceChange(event: CustomEvent) {
    // const distance = event.detail.value;
    // this.store.getOffers(distance);
    // console.log('Distance changed:', distance, this.store.offers());
    console.log('distance')
  }

  async openFilterModal() {
    const modal = await this.modalController.create({
      component: FilterModalComponent,
      componentProps: {
        filterConfig: this.filterConfig,
        filterData: this.filterData,
      },
      cssClass: 'filter-modal',
      backdropDismiss: true,
      showBackdrop: false,
    });

    modal.onDidDismiss().then((data: any) => {
      if (data.data) {
        console.log('Filtres sélectionnés :', data.data);
      }
    });

    await modal.present();
  }
}
