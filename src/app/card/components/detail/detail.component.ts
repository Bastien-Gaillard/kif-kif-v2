import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IonicModule, IonSearchbar, NavController } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { cardStore } from '../../cards.shop';
import { FormsModule } from '@angular/forms';

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
  public store = inject(cardStore);
  ngOnInit() {}

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
