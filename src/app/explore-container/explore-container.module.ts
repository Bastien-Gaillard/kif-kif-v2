import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ExploreContainerComponent],
  declarations: [],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
