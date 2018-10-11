import { Component, OnInit }                  from '@angular/core';
import bulmaCalendar                          from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants }                          from '../../../core/Constants';

@Component({
  selector: 'edsr-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {


  signUpForm: FormGroup;
  submitted: boolean = false;

  signUpValidationMessage = Constants.signUpValidationMessage;


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

    if (this.signUpForm.invalid) {
      this.markTouchedControls();
      return;
    }

    alert('SUCCESS!! :-)')
  }

  markTouchedControls() {
    Object.keys(this.signUpForm.controls).forEach(field => {
      const control = this.signUpForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  shouldDisplayErrors(field: string) {
    return (!this.signUpForm.get(field).valid && this.signUpForm.get(field).touched);
  }


}
