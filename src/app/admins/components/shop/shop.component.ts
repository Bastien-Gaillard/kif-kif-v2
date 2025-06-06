import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from './services/shop.service';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { shopStore } from './store';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent],
})
export class ShopComponent implements OnInit {
  shop: any =  {
    name: 'Boutique Demo',
    city: 'Paris',
    zipCode: '75001',
    address: '123 Rue de la Paix'
  };
  categories: any = [ { idCategorie: 1, name: 'Vêtements' },
    { idCategorie: 2, name: 'Accessoires' },];
  allCategories: any = [    { idCategorie: 1, name: 'Vêtements' },
    { idCategorie: 2, name: 'Accessoires' },
    { idCategorie: 3, name: 'Chaussures' },
    { idCategorie: 4, name: 'Électronique' },];
  titlePage: string = 'Gestion de la boutique';
  public store = inject(shopStore)
  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.loadShop();
    this.loadAllCategories();
  }

  async loadShop() {
    this.shop = await this.shopService.getShop();
    this.categories = this.shop.categories;
  }

  async loadAllCategories() {
    this.allCategories = await this.shopService.getAllCategories();
  }

  async addCategory(categoryId: number) {
    await this.shopService.addCategoryToShop(this.shop.idShop, categoryId);
    this.loadShop();
  }

  async removeCategory(categoryId: number) {
    await this.shopService.removeCategoryFromShop(this.shop.idShop, categoryId);
    this.loadShop();
  }

  isCategoryLinked(id: number): boolean {
    return this.categories.some((c: any) => c.idCategorie === id);
  }

  logout() {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  }


}
