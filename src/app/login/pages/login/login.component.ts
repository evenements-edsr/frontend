import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'edsr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;

  loginValidationMessage = {
    'email': [
      { type: 'required', message: 'L\'adresse email est obligatoire' },
      { type: 'email', message: 'L\'adresse n\'est pas une adresse email valide' }
    ],
    'password': [
      { type: 'required', message: 'Le mot de passe est obligatoire' },
    ],
  };

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required]]
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)')
  }

  shouldDisplayErrors(field: string) {
    return (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.submitted);
  }

}
