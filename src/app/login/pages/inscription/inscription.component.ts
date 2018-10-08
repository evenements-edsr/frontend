import { Component, OnInit }                  from '@angular/core';
import bulmaCalendar                          from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'edsr-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {


  signUpForm: FormGroup;
  submitted: boolean = false;

  signUpValidationMessage = {
    'prenom' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'nom' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'dateDeNaissance' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'marqueMoto' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'modeleMoto' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'immatriculationMoto' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'datePermis' : [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],
    'email': [
      { type: 'required', message: 'L\'adresse email est obligatoire' },
      { type: 'email', message: 'L\'adresse n\'est pas une adresse email valide' }
    ],
    'password': [
      { type: 'required', message: 'Le mot de passe est obligatoire' },
    ],
  };


  ngOnInit() {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', {lang : 'fr', showHeader : false, displayMode : 'default'});

// Loop on each calendar initialized
    calendars.forEach(calendar => {
      // Add listener to date:selected event
      calendar.on('date:selected', date => {
        console.log(date);
      });
    });

    //TODO Add validateur pattern sur date

    this.signUpForm = this.formBuilder.group({
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      dateDeNaissance: ['', [Validators.required]],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required]],
      marqueMoto: ['', [Validators.required]],
      modeleMoto: ['', [Validators.required]],
      immatriculationMoto: ['', [Validators.required]],
      datePermis: ['', [Validators.required]],
      activerNotification: ['']
    });
  }

  constructor(private formBuilder : FormBuilder) { }

  get f() { return this.signUpForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.signUpForm.getRawValue());

    if (this.signUpForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)')
  }

  shouldDisplayErrors(field: string) {
    return (!this.signUpForm.get(field).valid && this.signUpForm.get(field).touched) ||
      (this.signUpForm.get(field).untouched && this.submitted);
  }


}
