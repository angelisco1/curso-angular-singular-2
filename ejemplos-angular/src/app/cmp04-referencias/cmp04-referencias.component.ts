import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp04-referencias',
  templateUrl: './cmp04-referencias.component.html',
  styleUrls: ['./cmp04-referencias.component.css']
})
export class Cmp04ReferenciasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  play(video: HTMLMediaElement) {
    console.dir(video)
    video.play()
  }

  pause(video: HTMLMediaElement) {
    video.pause()
  }

  cambiarVolumen(video: HTMLMediaElement, event: any) {
    const volumen = Number(event.target.value) / 100
    video.volume = volumen
  }

}
