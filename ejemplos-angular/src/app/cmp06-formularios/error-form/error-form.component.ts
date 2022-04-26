import { Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent implements OnChanges {

  @Input() errores: ValidationErrors | null = null
  mensajesError: Array<string> = []

  constructor() { }

  ngOnChanges(): void {
    this.mensajesError = []
    let datosError = null

    for (let key in this.errores) {
      console.log(this.errores[key])
      switch(key) {
        case 'required':
          this.mensajesError.push('El campo es obligatorio')
          break;
        case 'minlength':
          datosError = this.errores[key]
          // const msg = 'Longitud ' + datosError.actualLength + '/' + datosError.requiredLength
          this.mensajesError.push(`Longitud ${datosError.actualLength}/${datosError.requiredLength}`)
          break;
        case 'esStark':
          datosError = this.errores[key]
          this.mensajesError.push(`El usuario no es un stark (${datosError.join(', ')})`)
          break;
        case 'repetirPassword':
          this.mensajesError.push(`Las contraseñas tienen que ser iguales`)
          break;
      }
    }
  }

}
