import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError, from, Observable } from 'rxjs';
import { QueryService } from '../services/query.service';
import { Points } from '../models/points.model';
import { cardStore } from '../cards.shop';

@Injectable({
  providedIn: 'root',
})
export class GetPointsResolver implements Resolve<any> {
  constructor() {}

  private store = inject(cardStore);
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.getGlobalPoints();
  }

}

