import { Component, inject, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ShopsStore } from '../../stores/shops.store';
import { filterOutline, newspaper, newspaperOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Shops } from '../../models/shops.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class ShopListComponent implements OnInit {
  @Input() shops: Shops.GetShop[] = [];
  constructor(private router: Router) {
    addIcons({
      'filter-outline': filterOutline,
      'newspaper-outline': newspaperOutline,
    });
  }

  ngOnInit() {
  }

  getCategoryNames(shop: any): string {
    if (!shop?.shopsHasCategories) return '';
    return shop.shopsHasCategories
      .map((c: any) => c.categories?.name)
      .filter(Boolean)
      .join(', ');
  }

  goToShop(shopId: number) {
    this.router.navigate(['shop', shopId]);
  }
}
