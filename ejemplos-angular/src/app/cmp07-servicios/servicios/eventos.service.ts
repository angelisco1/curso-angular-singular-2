import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  usuarioLogueado = new EventEmitter<boolean>()

  constructor() { }

}
