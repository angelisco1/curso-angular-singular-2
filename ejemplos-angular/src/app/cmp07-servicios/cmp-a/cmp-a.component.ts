import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
import { EventosService } from '../servicios/eventos.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css'],
  // providers: [
  //   DatosService
  // ]
})
export class CmpAComponent implements OnInit {
  items: Array<string> = []
  isLoggedIn: boolean = false

  constructor(
    private datosService: DatosService,
    private tokenService: TokenService,
    private eventosService: EventosService) { }

  ngOnInit(): void {
    this.items = this.datosService.getItems()
    this.isLoggedIn = this.tokenService.getToken() ? true : false
    // this.isLoggedIn = !!this.tokenService.getToken()
    this.eventosService.usuarioLogueado
      .subscribe((logueado: boolean) => {
        this.isLoggedIn = logueado
      })
  }

  addItem(event: any): void {
    this.datosService.createItem(event.target.value)
  }

  login() {
    const token = Math.random().toString().slice(2)
    this.tokenService.setToken(token)
  }

  logout() {
    this.tokenService.delToken()
  }
}
