import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private items: Array<string> = ['Item 1']

  constructor() { }

  getItems(): Array<string> {
    return this.items
  }

  createItem(nuevoItem: string): void {
    this.items.push(nuevoItem)
  }
}
