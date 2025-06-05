import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfilPageRoutingModule } from './profil-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { ProfilComponent } from './components/profil.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfilPageRoutingModule,
    HeaderComponent,
    ProfilComponent
  ],
})
export class ProfilPageModule {

}
