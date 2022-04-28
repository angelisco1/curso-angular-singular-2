import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscriber, switchMap } from 'rxjs';

@Component({
  selector: 'app-cmp08-observables',
  templateUrl: './cmp08-observables.component.html',
  styleUrls: ['./cmp08-observables.component.css']
})
export class Cmp08ObservablesComponent implements OnInit {

  mostrar = true

  constructor() { }

  ngOnInit(): void {
    const obs1 = new Observable((subscriber: Subscriber<string>) => {
      subscriber.next('Bienvenido')

      setTimeout(() => {
        subscriber.next('Como lo llevas??')
      }, 2000)

      setTimeout(() => {
        // subscriber.error('Ha ocurrido un error')
        subscriber.complete()
      }, 3500)

    })

    obs1.subscribe({
      next: (msg: string) => {
        console.log(msg)
      },
      error: (err) => {
        console.log('Error: -> ' + err)
      },
      complete: () => {
        console.log('Se ha terminado')
      }
    })


    const obs2 = of({titulo: 'Pelicula 1', categoria: 'Acción'})
      .pipe(
        switchMap((pelicula: any) => {
          console.log(pelicula)
          // of => this.http.get('/peliculas?type=pelicula.categoria')
          return of([{titulo: 'Pelicula 1', categoria: 'Acción'}, {titulo: 'Pelicula 2', categoria: 'Acción'}])
        })
      )

    obs2.subscribe((datos: any) => {
      console.log({datos})
    })

  }

}
