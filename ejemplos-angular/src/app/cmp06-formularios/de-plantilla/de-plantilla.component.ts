import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-plantilla',
  templateUrl: './de-plantilla.component.html',
  styleUrls: ['./de-plantilla.component.css']
})
export class DePlantillaComponent implements OnInit {
  datosInicialesForm = {
    username: '',
    email: 'angel@gmail.com',
    password: '1234',
    repetirPassword: '1234',
  }

  constructor() { }

  ngOnInit(): void {
  }

  registro(formulario: any) {
    console.log(formulario)
  }

}
