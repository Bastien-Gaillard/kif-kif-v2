import { inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { QueryService } from './services/query.service';
import { GeolocationService } from '../services/geolocation.service';
import { AuthService } from '../shared/services/auth.service';
type ActionState = {
  users: any;
};

export const initialActionState: ActionState = {
  users: {},
};

export const profilStore = signalStore(
  { providedIn: 'root' },
  withState(initialActionState),
  withMethods(
    (
      store: any,
      queryService = inject(QueryService),
      authService = inject(AuthService)
    ) => ({
      getUserInformation: () => {
        queryService.getUserInformation(authService.getUserId()).subscribe({
          next: (response) => {
            console.log('API URL:', response);
            if (response.data) {
              patchState(store, { users: response.data });
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
    })
  )
);
