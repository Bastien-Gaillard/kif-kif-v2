import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { catchError, forkJoin, tap, throwError } from 'rxjs';
import { AppComponent } from '../../app.component';
import { QueryService } from '../services/query.service';
import { Shops } from '../models/shops.model';

type ShopsState = {
  shops: Shops.GetShop[];
  loading: boolean;
};

export const initialGoalAndRealState: ShopsState = {
  shops: [],
  loading: true,
};

export const ShopsStore = signalStore(
  { providedIn: 'root' },
  withState(initialGoalAndRealState),

  withMethods((store: any, queryService = inject(QueryService)) => {
    function getAllShops() {
      patchState(store, { loading: true });
      queryService.getAllShops().subscribe({
        next: (res) => {
          if (Array.isArray(res) && res.length > 0 && res[0] !== "error") {
            console.log('Valid response:', res);
            patchState(store, { shops: res });
            patchState(store, { loading: false });
          } else {
            console.error('Invalid response:', res);
            patchState(store, { loading: false });
          }
        },
        error: (err) => {
          console.error('Error in getAllShops:', err);
          patchState(store, { loading: false });
        },
      });
    }

    return {
      getAllShops
    };
  }),
);
