import { inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { ShopService } from './services/shop.service';
type ActionState = {
  shops: any;
};

export const initialActionState: ActionState = {
  shops: {},
};

export const shopStore = signalStore(
  { providedIn: 'root' },
  withState(initialActionState),
  withMethods((store: any) => ({
    getStore: (queryService: ShopService) => {
      queryService.getShop().subscribe({
        next: (response) => {
          if (response.body) {
            patchState(store, { shops: response.body.data[0] });
          } else {
            throw new Error('Erreur lors de la récupération des actions');
          }
        },
        error: (error) => {
          console.error('Erreur lors de la récupération des actions', error);
          patchState(store, { error: true });
        },
      });
    },
  }))
);
