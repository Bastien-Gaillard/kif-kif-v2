import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPage } from './shop.page';
import { GetShopResolver } from './resolvers/get-shop.resolver';

const routes: Routes = [
  {
    path: '',
    component: ShopPage,
    resolve: { allShops: GetShopResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [GetShopResolver]
})
export class ShopPageRoutingModule {}
