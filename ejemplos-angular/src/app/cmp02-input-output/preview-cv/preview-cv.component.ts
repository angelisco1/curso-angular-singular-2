import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-cv',
  templateUrl: './preview-cv.component.html',
  styleUrls: ['./preview-cv.component.css']
})
export class PreviewCvComponent implements OnInit {

  @Input() nombre = ''
  @Input() apellidos = ''
  @Input() email = ''

  constructor() { }

  ngOnInit(): void {
  }

}
