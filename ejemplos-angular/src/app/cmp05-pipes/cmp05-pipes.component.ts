import { Component, OnInit } from '@angular/core';
import { DescuentoPipe } from './descuento.pipe';

@Component({
  selector: 'app-cmp05-pipes',
  templateUrl: './cmp05-pipes.component.html',
  styleUrls: ['./cmp05-pipes.component.css']
})
export class Cmp05PipesComponent implements OnInit {
  finSubstring: number = 150

  producto = {
    nombre: 'one plus 8',
    descripcion: 'Minions ipsum jiji pepete aaaaaah uuuhhh chasy para tú wiiiii daa chasy. Jeje hahaha la bodaaa la bodaaa underweaaar underweaaar. Bappleees belloo! Hana dul sae para tú ti aamoo! La bodaaa poulet tikka masala gelatooo jeje. Jeje jiji pepete jiji pepete la bodaaa para tú para tú underweaaar. Para tú jeje chasy pepete. Para tú pepete potatoooo me want bananaaa! Daa hahaha.',
    precio: 385,
    fechaDeCompra: new Date()
  }

  mensaje = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hola mundo...')
    }, 2000)
  })

  constructor() { }

  ngOnInit(): void {
    // console.log(new DescuentoPipe().transform(200, 10))
  }

}
