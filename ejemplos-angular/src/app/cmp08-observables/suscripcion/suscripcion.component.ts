import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription()
  // sub1: Subscription | null = null

  constructor() { }

  ngOnInit(): void {
    const sub = interval(1000)
      .pipe(
        filter((num) => num % 2 === 0),
        // take(5),
        map((num) => num * 3)
      )
      .subscribe((num) => {
        console.log(num)
      })
    // this.sub1 = sub
    this.subscriptions.add(sub)
  }

  ngOnDestroy() {
    // this.sub1?.unsubscribe
    this.subscriptions.unsubscribe()
  }

}
