// wallet.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WalletService {
  private userBalance = 100;

  getBalance(): number {
    return this.userBalance;
  }

  transfer(amount: number): boolean {
    if (this.userBalance >= amount) {
      this.userBalance -= amount;
      return true;
    }
    return false;
  }

  receive(amount: number): void {
    this.userBalance += amount;
  }
}
