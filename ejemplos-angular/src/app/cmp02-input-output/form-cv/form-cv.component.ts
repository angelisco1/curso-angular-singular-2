import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type EventoForm = {
  key: string,
  val: string
}

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {
  @Input() nombre = ''
  @Input() apellidos = ''
  @Input() email = ''
  @Output() datoCambiado = new EventEmitter<EventoForm>();

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(event: any) {
    const evento: EventoForm = {
      key: event.target.name,
      val: event.target.value
    }

    this.datoCambiado.emit(evento)
  }

}
