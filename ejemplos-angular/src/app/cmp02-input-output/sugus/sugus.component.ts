import { Component, Input, OnInit } from '@angular/core';

export type Sugus = {sabor: string, color: string}

@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css']
})
export class SugusComponent implements OnInit {

  // @Input() sabor: string = 'naranja'
  // @Input() color: string = 'orange'

  @Input() sugus: Sugus = {
    sabor: 'naranja',
    color: 'orange',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
