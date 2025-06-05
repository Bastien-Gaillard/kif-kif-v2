import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './components/admins.component';

const routes: Routes = [
  {
    path: '',
    component: AdminsComponent,
    children: [
      { path: 'offers', loadChildren: () => import('./components/offers/offers.module').then(m => m.OffersModule) },
      { path: 'shop', loadChildren: () => import('./components/shop/shop.module').then(m => m.ShopModule) },
      { path: 'scanner', loadChildren: () => import('./components/scanner/scanner.module').then(m => m.ScannerModule) },
      { path: '', redirectTo: 'offers', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule {}
