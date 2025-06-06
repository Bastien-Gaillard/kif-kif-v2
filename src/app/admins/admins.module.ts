import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AdminPageRoutingModule } from './admins-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AdminsComponent } from './components/admins.component';
import { OffersComponent } from './components/offers/offers.component';
import { ShopComponent } from './components/shop/shop.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { GetShopResolver } from '../shop/resolvers/get-shop.resolver';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AdminPageRoutingModule,
    HeaderComponent,
    AdminsComponent,
    OffersComponent,
    ShopComponent,
    ScannerComponent
  ],
  providers: [GetShopResolver]
})
export class AdminPageModule {

}
