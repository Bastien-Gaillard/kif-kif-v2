import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardPage } from './card.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CardPageRoutingModule } from './card-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CardPageRoutingModule,
    HeaderComponent,
    CardPage
  ],
})
export class CardPageModule {

}
