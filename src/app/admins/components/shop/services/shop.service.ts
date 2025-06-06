import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({ providedIn: 'root' })
export class ShopService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getShop() {
    return this.http.get<any>(`${environment.apiUrl}shops/user/${this.authService.getUserId()}`, {
     observe: 'response',
    });
  }

  getAllCategories() {
    return this.http.get<any[]>('/api/categories').toPromise();
  }

  addCategoryToShop(shopId: number, categoryId: number) {
    return this.http.post(`/api/shop/${shopId}/categories`, { categoryId }).toPromise();
  }

  removeCategoryFromShop(shopId: number, categoryId: number) {
    return this.http.delete(`/api/shop/${shopId}/categories/${categoryId}`).toPromise();
  }
}
