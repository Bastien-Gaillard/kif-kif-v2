import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OffersComponent } from './offers.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OffersComponent
  ],
})
export class OffersModule {

}
