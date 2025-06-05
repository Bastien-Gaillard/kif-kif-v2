import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError, from, Observable, share } from 'rxjs';
import { sharedStore } from '../store';

@Injectable({
  providedIn: 'root',
})
export class GetShopNearUserResolver implements Resolve<any> {
  constructor() {}

  private store = inject(sharedStore);
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.getShopNearUser();
  }
}

