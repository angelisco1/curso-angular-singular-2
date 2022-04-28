import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';

const URL: string = 'https://ejemplos-dc1c1.firebaseio.com/angular-sngular2/tareas/profe'

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  tareaEliminada$ = new Subject<string>()
  // tareaEliminada$ = new EventEmitter<string>()

  constructor(private http: HttpClient) { }

  createTarea(tarea: any): Observable<any> {
    return this.http.post(`${URL}.json`, tarea)
  }

  getTareas(): Observable<any> {
    return this.http.get(`${URL}.json`)
      .pipe(
        map((data: any) => {
          const arrTareas = []
          for (let id in data) {
            arrTareas.push({...data[id], id})
          }
          return arrTareas
        })
      )
  }

  deleteTarea(id: string): Observable<null> {
    return this.http.delete<null>(`${URL}/${id}.json`)
      .pipe(
        tap(() => {
          this.tareaEliminada$.next(id)
          // this.tareaEliminada$.emit(id)
        })
      )
  }

  completeTarea(id: string, completada: boolean): Observable<any> {
    return this.http.patch(`${URL}/${id}.json`, { completada })
  }
}
