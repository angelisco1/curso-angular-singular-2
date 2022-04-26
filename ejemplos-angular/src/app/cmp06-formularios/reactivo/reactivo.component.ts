import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      // username: new FormControl('', [Validators.required, CustomValidators.esStark]),
      username: new FormControl('', [Validators.required, CustomValidators.esStarkConParams(['robb', 'arya', 'bran', 'rickon', 'tony', 'sansa'])]),
      email: new FormControl('angel@gmail.com', Validators.required),

      groupPasswords: new FormGroup({
        password: new FormControl('1234', [Validators.required, Validators.minLength(4)]),
        repetirPassword: new FormControl('1234', [Validators.required, Validators.minLength(4), CustomValidators.repetirPassword('password')]),
      }, CustomValidators.repetirPassword2)

    })
  }

  ngOnInit(): void {
  }

  registrar() {
    console.log(this.formulario)
  }

  // getControl(name: string) {
  //   return this.formulario.controls[name]
  // }

  getErrores(name: string): ValidationErrors | null {
    return this.formulario.controls[name].errors
  }

  hayQuePintarErrores(name: string): boolean {
    return this.formulario.controls[name].invalid && this.formulario.controls[name].dirty
  }

  // getErroresInputGroup(name: string): ValidationErrors | null {
  //   return this.formulario.controls['groupPasswords'].get(name).errors
  // }

  // hayQuePintarErroresInputGroup(name: string): boolean {
  //   return this.formulario.controls[name].invalid && this.formulario.controls[name].dirty
  // }

}
