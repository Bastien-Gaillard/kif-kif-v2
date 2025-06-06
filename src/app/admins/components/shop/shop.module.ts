import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop.component';
import { GetShopResolver } from './resolvers/get-shop.resolver';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShopComponent
  ],
  providers: [GetShopResolver]

})
export class ShopModule {

}
