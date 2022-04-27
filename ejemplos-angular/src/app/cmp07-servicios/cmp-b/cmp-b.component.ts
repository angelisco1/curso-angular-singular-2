import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
})
export class CmpBComponent implements OnInit {
  items: Array<string> = []
  usuarioALogueado = ''

  constructor(private datosService: DatosService, private eventosService: EventosService) { }

  ngOnInit(): void {
    this.items = this.datosService.getItems()
    this.eventosService.usuarioLogueado.subscribe((isLoggedIn: boolean) => {
      this.usuarioALogueado = isLoggedIn ? 'El usuario A se acaba de loguear' : 'El usuario A se acaba de desloguear'
    })
  }

  addItem(event: any): void {
    this.datosService.createItem(event.target.value)
  }
}
