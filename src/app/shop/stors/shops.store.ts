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
      queryService.getAllShops().subscribe({
        next: (res) => {
          if (res.body !== null) {
            patchState(store, { shops: res.body as any });

            patchState(store, { loading: false });
          } else {
            throw new Error('No data found');
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }

    return {
      getAllShops
    };
  }),
);
