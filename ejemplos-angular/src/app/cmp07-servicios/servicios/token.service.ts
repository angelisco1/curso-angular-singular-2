import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventosService } from './eventos.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private KEY: string = 'jwt'

  usuarioLogueado = new EventEmitter<boolean>()
  usuarioLogueado$: BehaviorSubject<boolean>

  // constructor(private eventosService: EventosService) {
  constructor() {
    const token = this.getToken()
    this.usuarioLogueado$ = new BehaviorSubject<boolean>(token ? true : false)
  }

  getToken(): string | null {
    return localStorage.getItem(this.KEY)
  }

  setToken(token: string) {
    localStorage.setItem(this.KEY, token)
    this.usuarioLogueado$.next(true)
    // this.usuarioLogueado.emit(true)
  }

  delToken() {
    localStorage.removeItem(this.KEY)
    this.usuarioLogueado$.next(false)
    // this.usuarioLogueado.emit(false)
  }
}
