import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPage } from './shop.page';
import { GetShopResolver } from './resolvers/get-shop.resolver';
import { ShopsDetailsComponent } from './components/shops-details/shops-details.component';

const routes: Routes = [
  {
    path: '',
    component: ShopPage,
    resolve: { shops: GetShopResolver },
  },
  {
    path: ':id',
    component: ShopsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [GetShopResolver]
})
export class ShopPageRoutingModule {}
