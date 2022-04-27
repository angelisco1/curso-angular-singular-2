import { Injectable } from '@angular/core';
import { EventosService } from './eventos.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private KEY: string = 'jwt'

  constructor(private eventosService: EventosService) { }

  getToken(): string | null {
    return localStorage.getItem(this.KEY)
  }

  setToken(token: string) {
    localStorage.setItem(this.KEY, token)
    this.eventosService.usuarioLogueado.emit(true)
  }

  delToken() {
    localStorage.removeItem(this.KEY)
    this.eventosService.usuarioLogueado.emit(false)
  }
}
