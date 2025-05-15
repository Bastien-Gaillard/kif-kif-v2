import { inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { QueryService } from './services/query.service';
import { Points } from './models/points.model';
import { GeolocationService } from '../services/geolocation.service';
import { Offers } from './models/offers.model';
type ActionState = {
  loadingGlobalPoints: boolean,
  loadingHistoryPoints: boolean,
  loadingCardNumber: boolean,
  loadingCurrentPoints: boolean,
  loadingOffers: boolean;
  error: boolean;
  globalPoints: Points.GetGlobalPointsData | null;
  historyPoints: Points.GetHistoryPoints[] | null;
  tempHistoryPoints: Points.GetHistoryPoints[] | null;
  cardNumber: number;
  currentPoints: Points.GetCurrentPoints[] | null;
  tempCurrentPoints: Points.GetCurrentPoints[] | null;
  filterConfigForHistory: any;
  offers: Offers.GetOffersData[] | null;
};

export const initialActionState: ActionState = {
  loadingGlobalPoints: false,
  loadingHistoryPoints: false,
  loadingCardNumber: false,
  loadingCurrentPoints: false,
  loadingOffers: false,
  error: false,
  globalPoints: null,
  historyPoints: null,
  cardNumber: 0,
  currentPoints: null,
  tempCurrentPoints: null,
  tempHistoryPoints: null,
  filterConfigForHistory: null,
  offers: null,
};

export const cardStore = signalStore(
  { providedIn: 'root' },
  withState(initialActionState),
  withMethods((store: any, queryService = inject(QueryService), geolocationService = inject(GeolocationService)) => ({
    getGlobalPoints: () => {
      patchState(store, { loadingGlobalPoints: true });
      queryService.getGlobalPoints(12).subscribe({
        next: (response) => {
          if (response.data) {
            patchState(store, { globalPoints: response.data });
            patchState(store, { loadingGlobalPoints: false });

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
    getHistoryPoints: () => {
      patchState(store, { loading: true });
      queryService.getHistoryPoints(12).subscribe({
        next: (response) => {
          if (response.data) {
            patchState(store, { historyPoints: response.data });
            patchState(store, { tempHistoryPoints: response.data });

            patchState(store, {
              filterConfigForHistory: [
                {
                  key: 'category',
                  type: 'select',
                  label: 'Catégorie',
                  options: getCategoriesOfHistoryPoints(response.data),
                  placeholder: 'Sélectionnez une catégorie',
                },
                {
                  key: 'gains',
                  type: 'select',
                  label: 'Gains',
                  options: [
                    { label: 'Positif', value: 'more' },
                    { label: 'Négatif', value: 'less' },
                  ],
                  placeholder: 'Sélectionnez un type de gain',
                },
                {
                  type: 'range',
                  label: 'Nombre de points',
                  key: 'points',
                  min: 0,
                  max: 1000,
                  step: 10,
                  defaultValues: 0,
                  unit: 'pts',
                },
              ],
            });
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

    getCurrentPoints: () => {
      patchState(store, { loadingCurrentPoints: true });
      queryService.getCurrentPoints(12).subscribe({
        next: (response) => {
          if (response.data) {

            patchState(store, { currentPoints: response.data });
            patchState(store, { tempCurrentPoints: response.data });
            patchState(store, { loadingCurrentPoints: false });

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
    getCardNumber: () => {
      patchState(store, { loading: true });
      queryService.getCardNumber(12).subscribe({
        next: (response) => {
          console.log(response.data);
          if (response.data) {
            patchState(store, { cardNumber: response.data });
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

    getOffers: async (distance?: number) => {
      patchState(store, { loadingOffers: true });
      queryService.getOffers(distance || 500, await geolocationService.getCurrentPosition()).subscribe({
        next: (response) => {
          if (response.data) {
            console.log("response.data", response.data);
            patchState(store, { offers: response.data });
            patchState(store, { loadingOffers: false });
            console.log(response.data);
          } else {
            throw new Error('Erreur lors de la récupération des actions');
          }
        },
        error: (error) => {
          console.error('Erreur lors de la récupération des actions', error);
          patchState(store, { error: true });
          patchState(store, { loadingOffers: false });

        },
      });
    },

    filterShopsForCurrentPoints(query: string) {
      const lowerCaseQuery = query.toLowerCase();
      patchState(store, {
        currentPoints: store
          .tempCurrentPoints()
          .filter((point: any) =>
            point.shopName.toLowerCase().includes(lowerCaseQuery)
          ),
      });
    },

    filterShopsForHistoriquePoints(query: string) {
      const lowerCaseQuery = query.toLowerCase();
      console.log(store.tempHistoryPoints());
      patchState(store, {
        historyPoints: store
          .tempHistoryPoints()
          .filter((point: any) =>
            point.shops.name.toLowerCase().includes(lowerCaseQuery)
          ),
      });
    },

    filterHistoryPoints(filterConfig: any) {
      const { category, gains, points } = filterConfig;
      const filteredPoints = store.tempHistoryPoints().filter((point: any) => {
        const pointCategory = point.shops.shopsHasCategories.map(
          (cat: any) => cat.categories.idCategorie
        );
        const pointGain = point.points;
        const positive = point.positive
        return (
          (category ? pointCategory.includes(category) : true) &&
          (gains === 'more' ? positive == true : positive == false) &&
          (points ? pointGain === points : true)
        );

      });
      console.log(filterConfig, filteredPoints);

      patchState(store, { historyPoints: filteredPoints });
    },


  }))
);

function getCategoriesOfHistoryPoints(points: any) {
  const categories = points
    .flatMap((point: any) =>
      point.shops.shopsHasCategories.map((cat: any) => cat.categories)
    );

  const uniqueCategories = Array.from(
    new Map(categories.map((cat: any) => [cat.idCategorie, cat])).values()
  ).map((cat: any) => ({ label: cat.name, value: cat.idCategorie }));

  return uniqueCategories;
}
