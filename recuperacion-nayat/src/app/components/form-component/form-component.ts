import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
})
export class FormComponent {

  filterForm = new FormGroup ({
    name: new FormControl(''),
    status: new FormControlStatus('ALIVE' | 'DEAD' | 'UNKNOWN'),
    specie: new FormControl('')
  });

  onSubmit() {
    console.warn(this.filterForm.value);
  }

}
