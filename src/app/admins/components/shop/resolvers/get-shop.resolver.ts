import { inject, Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, from, Observable } from 'rxjs';
import { ShopService } from '../services/shop.service';
import { shopStore } from '../store';

@Injectable({
  providedIn: 'root',
})
export class GetShopResolver implements Resolve<any> {
  constructor(private shopService: ShopService) {}
  private store = inject(shopStore);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.getStore(this.shopService);
  }
}
