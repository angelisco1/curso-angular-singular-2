import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp02-input-output',
  templateUrl: './cmp02-input-output.component.html',
  styleUrls: ['./cmp02-input-output.component.css']
})
export class Cmp02InputOutputComponent implements OnInit {
  nombre: string = ''
  apellidos: string = ''
  email: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  cambiarDatos(event: any) {
    switch(event.key) {
      case 'nombre':
        this.nombre = event.val
        break
      case 'apellidos':
        this.apellidos = event.val
        break
      case 'email':
        this.email = event.val
        break
    }
  }

}
