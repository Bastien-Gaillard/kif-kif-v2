import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './components/admins.component';
import { OffersComponent } from './components/offers/offers.component';
import { ShopComponent } from './components/shop/shop.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { GetShopResolver } from './components/shop/resolvers/get-shop.resolver';

const routes: Routes = [
  {
    path: '',
    component: AdminsComponent,
    resolve: {
      shops: GetShopResolver,
    },
  },
  {
    path: 'offres',
    component: OffersComponent,
  },
  {
    path: 'magasin',
    component: ShopComponent,
    resolve: {
      shops: GetShopResolver,
    },
  },
  {
    path: 'scanner',
    component: ScannerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
