import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  constructor() {}

  async getCurrentPosition() {
    try {
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      });
      return position;
    } catch (error) {
      console.error('Error getting location:', error);
      throw error;
    }
  }

  async watchPosition(): Promise<string> {
    return new Promise((resolve, reject) => {
      const watchId = Geolocation.watchPosition(
        { enableHighAccuracy: true },
        (position, error) => {
          if (error) {
            console.error('Erreur watchPosition:', error);
            reject(error);
            return;
          }
          if (position) {
            localStorage.setItem('userPosition', JSON.stringify(position));
          }
        }
      );
      resolve(watchId);
    });
  }

  haversineDistance(
    coord1: [number, number],
    coord2: [number, number]
  ): number {
    const R = 6371;

    const lat1 = coord1[0];
    const lon1 = coord1[1];
    const lat2 = coord2[0];
    const lon2 = coord2[1];

    const toRad = (angle: number) => (angle * Math.PI) / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }
}
