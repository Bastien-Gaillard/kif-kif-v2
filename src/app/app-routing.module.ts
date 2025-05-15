import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { WalletModalComponent } from './wallet/components/wallet-modal/wallet-modal.component';
import { GetShopNearUserResolver } from './wallet/resolvers/getShopNearUser.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'admins',
    component: AdminsComponent
  },
    {
    path: 'wallet',
    component: WalletModalComponent,
    resolve: {
      shopNearMe: GetShopNearUserResolver
    }
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
