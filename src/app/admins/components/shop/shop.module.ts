import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShopComponent
  ],
})
export class ShopModule {

}
