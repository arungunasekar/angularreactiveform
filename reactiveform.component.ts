import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  associateForm: FormGroup;
  dataDisplay: Boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.associateForm = this.formBuilder.group({
      associateName: ['', Validators.required],
      associateID: ['', Validators.required],
      associateDesignation: ['', Validators.required]
    })
  }

  resetForm(){
    this.associateForm.reset();
  }

  submitForm(){
    this.dataDisplay = true;
  }

}
