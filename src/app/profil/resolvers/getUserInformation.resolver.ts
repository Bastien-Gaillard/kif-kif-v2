import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError, from, Observable } from 'rxjs';
import { QueryService } from '../services/query.service';
import { profilStore } from '../profil.store';

@Injectable({
  providedIn: 'root',
})
export class GetUserInformationResolver implements Resolve<any> {
  constructor() {}

  private store = inject(profilStore);
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.getUserInformation();
  }

}

