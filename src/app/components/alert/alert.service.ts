import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  message: string | null = null;
  type: 'info' | 'warning' | 'error' | null = null;

  constructor() {}

  showInfo(message: string): void {
    this.message = message;
    this.type = 'info';
  }

  showWarning(message: string): void {
    this.message = message;
    this.type = 'warning';
  }

  showError(message: string): void {
    this.message = message;
    this.type = 'error';
  }

  clear(): void {
    this.message = null;
    this.type = null;
  }
}
