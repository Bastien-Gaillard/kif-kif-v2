import { inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { QueryService } from './services/query.service';

type ActionState = {
  shop: any;
};

export const initialActionState: ActionState = {
  shop: {}
};

export const sharedStore = signalStore(
  { providedIn: 'root' },
  withState(initialActionState),
  withMethods((store: any, queryService = inject(QueryService)) => ({
    getShopNearUser: () => {
      const storedPosition = localStorage.getItem('userPosition');
      const position = storedPosition ? JSON.parse(storedPosition) : null;
      patchState(store, { loadingGlobalPoints: true });
      queryService.getShopNearUser(position).subscribe({
        next: (response) => {
            console.log('response', response);

          if (response) {
            patchState(store, { shop: response.data });

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
