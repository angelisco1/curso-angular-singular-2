import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

type Usuario = {nombre: string, apellidos: string, email: string}

// interface IUsuario {
//   nombre: string,
//   apellidos: string,
//   email: string
// }

@Component({
  selector: 'app-cmp01-data-binding',
  templateUrl: './cmp01-data-binding.component.html',
  styleUrls: ['./cmp01-data-binding.component.css']
})
export class Cmp01DataBindingComponent implements OnInit {
  usuario: Usuario = {
    nombre: 'Ángel',
    apellidos: 'Villalba',
    email: 'angel@gmail.com'
  }

  pais: string = 'france'

  nombreImagen: string = 'Angular'
  textoAlternativo = 'Logo de ' + this.nombreImagen
  urlLogoAngular: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

  nombre: string = '';
  // string, number, boolean, null, undefined, any, unknown
  // Array<number>, string[], {nombre: string}
  // Date

  // cualquierCosa: any = 3

  constructor() {
    // this.cualquierCosa = 'un string'
    // this.cualquierCosa = [1, '', true]
  }

  ngOnInit(): void {
  }

  getNombre(): string {
    return this.usuario.nombre
  }

  resetEmail(event: any): void {
    console.log(event.target.outerText)
    this.usuario.email = ''
  }

  changeEmail(event: any): void {
    this.usuario.email = event.target.value
  }

}