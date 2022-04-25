import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit {
  @HostBinding('style.backgroundColor') colorFondo: string = ''
  @Input('appMarcar') color: string = ''

  constructor() {
  }

  ngOnInit() {
    console.log('NgOnInit 1', this.color)
    if (!this.color) {
      this.color = 'yellow'
    }
    console.log('NgOnInit 2', this.color)
  }

  @HostListener('mouseover') pintaHost() {
    this.colorFondo = this.color
  }

  @HostListener('mouseleave') resetColor() {
    this.colorFondo = ''
  }

}
