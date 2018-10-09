import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'edsr-display-errors',
  template: `
    <ng-container *ngIf="shouldDisplayErrors()">
      <ng-container *ngFor="let validation of validationMessages">
        <p *ngIf="control.hasError(validation.type)" class="help is-danger">{{validation.message}}</p>
      </ng-container>
    </ng-container>
  `,
})
export class DisplayErrorsComponent implements OnInit {

  @Input() validationMessages;
  @Input() control;


  constructor() {
  }

  ngOnInit() {
    console.log(this.validationMessages);
    console.log(this.control);
  }

  shouldDisplayErrors() {
    return (!this.control.valid && this.control.touched);
  }

}
