import { Shops } from '../models/shops.model';

export declare namespace Offers {
  interface GetOffers {
    data: GetOffersData;
  }

  interface GetOffersData {
      idOffers: number,
      label: string,
      description:string ,
      startDate:string,
      endDate: string,
      startDisplayDate: number,
      distance: number,
      shops: Shops.GetShopsForOffers,
  }
}
