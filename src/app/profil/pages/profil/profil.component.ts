import { Component, OnInit }                  from '@angular/core';
import bulmaCalendar                          from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants }                          from '../../../core/Constants';

@Component({
  selector: 'edsr-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  profilForm: FormGroup;
  submitted: boolean = false;

  profilValidationMessage = Constants.signUpValidationMessage;


  ngOnInit() {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', {lang : 'fr', showHeader : false, displayMode : 'default', dateFormat : 'DD/MM/YYYY'});
//
// Loop on each calendar initialized
    calendars.forEach(calendar => {
    //   Add listener to date:selected event
      calendar.on('date:selected', date => {
        console.log(date);
      });
    });

    //TODO Add validateur pattern sur date

    this.profilForm = this.formBuilder.group({
      prenom: ['Jean', [Validators.required]],
      nom: ['Neymar', [Validators.required]],
      dateDeNaissance: ['07/12/1993', [Validators.required]],
      email: ['jean-neymar@gmail.com', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required]],
      marqueMoto: ['Yamaha', [Validators.required]],
      modeleMoto: ['MT-09 Tracer', [Validators.required]],
      immatriculationMoto: ['AB-100-CD', [Validators.required]],
      datePermis: ['01/09/2016', [Validators.required]],
      activerNotification: [true]
    });
  }

  constructor(private formBuilder : FormBuilder) { }

  get f() { return this.profilForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.profilForm.invalid) {
      this.markTouchedControls();
      return;
    }

    alert('SUCCESS!! :-)')
  }

  markTouchedControls() {
    Object.keys(this.profilForm.controls).forEach(field => {
      const control = this.profilForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  shouldDisplayErrors(field: string) {
    return (!this.profilForm.get(field).valid && this.profilForm.get(field).touched);
  }


}
