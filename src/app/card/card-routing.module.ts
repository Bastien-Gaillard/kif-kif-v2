import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPage } from './card.page';
import { DetailComponent } from './components/detail/detail.component';
import { HistoryComponent } from './components/history/history.component';
import { OffersComponent } from './components/offers/offers.component';
import { GetPointsResolver } from './resolvers/getPoints.resolver';
import { GetHistoryPointsResolver } from './resolvers/getHistoryPoints.resolver';
import { GetCardNumberResolver } from './resolvers/getCardNumber.resolver';
import { GetCurrentPointsResolver } from './resolvers/getCurrentPoints.resolver';
import { GetOffersResolver } from './resolvers/getOffers.resolver';
import { GetShopNearUserResolver } from '../wallet/resolvers/getShopNearUser.resolver';
import { ShopListComponent } from '../shop/components/shop-list/shop-list.component';

const routes: Routes = [
  {
    path: '',
    component: CardPage,
    resolve: {
      globalPoints: GetPointsResolver,
      cardNumber: GetCardNumberResolver,
      shopNearMe: GetShopNearUserResolver
    },
  },
  {
    path: 'details',
    component: DetailComponent,
    resolve: {
      globalPoints: GetPointsResolver,
      currentPoints: GetCurrentPointsResolver
    },
  },
  {
    path: 'historique',
    component: HistoryComponent,
    resolve: {
      historyPoints: GetHistoryPointsResolver
    }
  },
  {
    path: 'offres',
    component: OffersComponent,
    resolve: {
      offers: GetOffersResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardPageRoutingModule {}
