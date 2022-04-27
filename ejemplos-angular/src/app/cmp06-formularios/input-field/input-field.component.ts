import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputFieldComponent),
    multi: true
  }]
})
export class InputFieldComponent implements OnInit, ControlValueAccessor {
  @Input() name: string = ''
  @Input() label: string = ''
  @Input() control: AbstractControl | null = null

  inputValue: any = ''
  handleChange: any
  setTouched: any

  constructor() { }

  ngOnInit(): void {
    // console.log('---', this.control)
  }

  cambiarValor(event: any) {
    this.handleChange(event.target.value)
  }

  writeValue(obj: any): void {
    this.inputValue = obj
  }

  registerOnChange(fn: any): void {
    this.handleChange = fn
  }

  registerOnTouched(fn: any): void {
    this.setTouched = fn
  }
}
