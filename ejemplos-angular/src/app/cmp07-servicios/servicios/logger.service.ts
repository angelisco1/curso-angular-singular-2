import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  error(msg: string): void {
    console.error(`${new Date().toLocaleDateString()} [ERROR] - ${msg}`)
  }

  warning(msg: string): void {
    console.warn(`${new Date().toLocaleDateString()} [WARN] - ${msg}`)
  }
}