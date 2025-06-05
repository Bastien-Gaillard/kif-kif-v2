import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/components/admins.component';
import { WalletModalComponent } from './wallet/components/wallet-modal/wallet-modal.component';
import { GetShopNearUserResolver } from './wallet/resolvers/getShopNearUser.resolver';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'admins',
    component: AdminsComponent,
  },
  {
    path: 'wallet',
    component: WalletModalComponent,
    resolve: {
      shopNearMe: GetShopNearUserResolver,
    },
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
