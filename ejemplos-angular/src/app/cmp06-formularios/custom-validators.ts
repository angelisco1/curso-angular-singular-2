import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const esStark = (control: AbstractControl): ValidationErrors | null => {
  const nombresStark = ['robb', 'arya', 'bran', 'rickon', 'tony', 'sansa']
  if (nombresStark.includes(control.value.toLowerCase())) {
    return null
  }

  return {
    esStark: nombresStark
  }
}

const esStarkConParams = (nombresStark: Array<string>): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (nombresStark.includes(control.value.toLowerCase())) {
      return null
    }

    return {
      esStark: nombresStark
    }
  }
}

const repetirPassword = (name: string): ValidatorFn => {

  return (control: AbstractControl): ValidationErrors | null => {
    const controlPw = control.parent?.get(name)
    const pw1 = controlPw?.value
    const pw2 = control.value

    if (pw1 === pw2) {
      return null
    }

    return {
      repetirPassword: true
    }
  }
}

const repetirPassword2 = (group: AbstractControl): ValidationErrors | null => {
  const controlPw1 = group.get('password')
  const controlPw2 = group.get('repetirPassword')
  const pw1 = controlPw1?.value
  const pw2 = controlPw2?.value
  console.log(pw1, pw2)

  if (pw1 === pw2) {
    return null
  }

  return {
    repetirPassword: true
  }
}

export const CustomValidators = {
  esStark,
  esStarkConParams,
  repetirPassword,
  repetirPassword2
}