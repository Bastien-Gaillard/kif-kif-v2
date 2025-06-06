import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPointsResolver } from './card/resolvers/getPoints.resolver';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GetPointsResolver,
    provideHttpClient(withInterceptorsFromDi()),
    BarcodeScanner
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
