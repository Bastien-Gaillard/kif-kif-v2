import { Component, inject, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { cardStore } from '../../cards.shop';
import { FilterModalComponent } from '../../../shared/components/filter-modal/filter-modal.component';
import { Filter } from 'src/app/shared/models/filter.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  imports: [IonicModule, HeaderComponent],
  standalone: true,
})
export class HistoryComponent implements OnInit {
  constructor(private modalController: ModalController) {}
  public store = inject(cardStore);
  historyPoints$ = this.store.historyPoints();
  titlePage: string = 'Mon historique';
  icon: string = 'chevron-back-outline';

  filterData = {
    category: null,
    gains: null,
    points: [0, 1000],
  };

  ngOnInit() {

  }

  formatDateToFrench(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
    };
    return date.toLocaleDateString('fr-FR', options).replace('.', '');
  }

  concatCategories(categories: { categories: { name: string } }[]): string {
    if (Array.isArray(categories)) {
      return categories.map((category) => category.categories.name).join('/');
    }
    return '';
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.store.filterShopsForHistoriquePoints(query);
  }

  async openFilterModal() {
    const modal = await this.modalController.create({
      component: FilterModalComponent,
      componentProps: {
        filterConfig: this.store.filterConfigForHistory(), // Passez la configuration des filtres au modal
        filterData: this.filterData, // Passez les données au modal
      },
      cssClass: 'filter-modal',
      backdropDismiss: true,
      showBackdrop: false,
    });

    modal.onDidDismiss().then((data: any) => {
      if (data.data) {
        console.log('Filtres sélectionnés :', data.data);
        this.filterData = data.data;
        this.store.filterHistoryPoints(data.data);
      }
    });

    await modal.present();
  }
}
