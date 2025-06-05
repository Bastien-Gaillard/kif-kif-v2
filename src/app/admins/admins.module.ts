import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AdminPageRoutingModule } from './admins-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AdminsComponent } from './components/admins.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AdminPageRoutingModule,
    HeaderComponent,
    AdminsComponent
  ],
})
export class AdminPageModule {

}
