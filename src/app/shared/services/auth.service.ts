import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
@Injectable({ providedIn: 'root' })
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';

  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    if (!token) return false;

    try {
      const decoded: any = jwtDecode(token);
      const exp = decoded.exp;
      const now = Date.now().valueOf() / 1000;
      return exp && exp > now;
    } catch (err) {
      console.error('Token invalide ou expiré', err);
      return false;
    }
  }

  // Récupère le token du localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Décode le token pour obtenir les données utilisateur
  getUserFromToken(): any | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const decoded: any = jwtDecode(token);
      console.log('Token décodé :', decoded);
      return decoded;
    } catch (err) {
      console.error('Erreur de décodage du token :', err);
      return null;
    }
  }

  getUserId(): number {
    const user = this.getUserFromToken();
    return user?.idUser ?? 0;
  }

  // Supprimer le token
  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
