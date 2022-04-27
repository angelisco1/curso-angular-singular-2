import { Component, OnInit } from '@angular/core';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-cmp09-http',
  templateUrl: './cmp09-http.component.html',
  styleUrls: ['./cmp09-http.component.css']
})
export class Cmp09HttpComponent implements OnInit {
  listaTareas: Array<any> = []

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    this.tareasService.getTareas()
      .subscribe((tareas) => {
        // console.log({tareas})
        this.listaTareas = tareas
      })
  }

  guardar(titulo: string) {
    const tarea = {
      // titulo: titulo,
      titulo,
      completada: false
    }
    this.tareasService.createTarea(tarea)
      .subscribe((data) => {
        console.log({data})
      })
  }

  completar(id: string) {

  }

  eliminar(id: string) {
    this.tareasService.deleteTarea(id)
      .subscribe(() => {})
  }

}
