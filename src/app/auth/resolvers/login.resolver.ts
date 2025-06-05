// src/app/resolvers/auth.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthResolver implements Resolve<void> {
  constructor(private authService: AuthService, private router: Router) {}

  resolve(): void {
    const isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/tabs/card']);
    }
  }
}
