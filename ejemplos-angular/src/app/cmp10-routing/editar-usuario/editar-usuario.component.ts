import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IComponentCanDeactivate } from '../guards/datos-guardados.guard';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit, IComponentCanDeactivate {

  datosGuardados: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  guardarDatos() {
    this.datosGuardados = true
  }

  estanLosDatosGuardados(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.datosGuardados
  }

}
