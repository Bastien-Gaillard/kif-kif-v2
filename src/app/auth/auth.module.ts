import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AuthPageRoutingModule } from './auth-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AuthComponent } from './components/auth.component';
import { HttpClientModule } from '@angular/common/module.d-CnjH8Dlt';

@NgModule({

  imports: [
    AuthComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AuthPageRoutingModule,
    HeaderComponent,
  ]
})
export class AuthPageModule {}
