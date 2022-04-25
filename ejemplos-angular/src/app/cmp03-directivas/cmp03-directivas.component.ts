import { Component, OnInit } from '@angular/core';
import { Sugus } from '../cmp02-input-output/sugus/sugus.component';

@Component({
  selector: 'app-cmp03-directivas',
  templateUrl: './cmp03-directivas.component.html',
  styleUrls: ['./cmp03-directivas.component.css']
})
export class Cmp03DirectivasComponent implements OnInit {

  tachado: boolean = true
  color: string = '#acacac'
  get styles() {
    return {
      textDecoration: 'underline',
      backgroundColor: this.color
    }
  }

  listaSugus: Array<Sugus> = [
    { color: 'blue', sabor: 'piña' },
    { color: 'yellow', sabor: 'limón' },
    { color: 'orange', sabor: 'naranja' },
    { color: 'red', sabor: 'fresa' },
  ]

  listaIngresosGastos = [
    { concepto: 'Luz', cantidad: -80 },
    { concepto: 'Salario', cantidad: 1500 },
    { concepto: 'Agua', cantidad: -50 },
    { concepto: 'Comida', cantidad: -350 },
    { concepto: 'Loteria', cantidad: 150 }
  ]

  darkModeActivado: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  getStyles() {
    return {
      textDecoration: 'underline',
      backgroundColor: this.color
    }
  }

  toggleDarkMode(activar: boolean) {
    this.darkModeActivado = activar
  }
}
