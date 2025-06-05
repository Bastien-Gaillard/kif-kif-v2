import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { GetShopNearUserResolver } from '../wallet/resolvers/getShopNearUser.resolver';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'card',
        loadChildren: () => import('../card/card.module').then(m => m.CardPageModule),
      },
      {
        path: 'shop',
        loadChildren: () => import('../shop/shop.module').then(m => m.ShopPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: '',
        redirectTo: 'card',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
