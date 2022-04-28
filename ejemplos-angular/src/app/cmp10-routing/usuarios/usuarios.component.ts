import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Array<any> = [
    { id: 1, nombre: 'Charles Falco' },
    { id: 2, nombre: 'Arya Stark' },
    { id: 3, nombre: 'Octavia Blake' },
    { id: 4, nombre: 'Mike Kozinski' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
