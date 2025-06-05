import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScannerComponent } from './scanner.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ScannerComponent
  ],
})
export class ScannerModule {

}
