import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: any
  subscription: Subscription | null = null

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
  }

  completar() {
    this.tareasService.completeTarea(this.tarea.id, !this.tarea.completada)
      .subscribe((resp: any) => {
        this.tarea.completada = resp.completada
      })
  }

  eliminar() {
    this.subscription = this.tareasService.deleteTarea(this.tarea.id)
      .subscribe(() => {

      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
