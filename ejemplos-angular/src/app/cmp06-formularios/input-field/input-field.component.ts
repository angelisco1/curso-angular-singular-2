import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() name: string = ''
  @Input() label: string = ''
  @Input() control: AbstractControl | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
