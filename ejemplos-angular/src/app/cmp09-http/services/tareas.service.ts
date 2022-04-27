import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const URL: string = 'https://ejemplos-dc1c1.firebaseio.com/angular-sngular2/tareas/profe'

@Injectable({
  providedIn: 'root'
})
export class TareasService {

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
  }
}
