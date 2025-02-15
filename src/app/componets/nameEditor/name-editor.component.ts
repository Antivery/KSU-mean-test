import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-name-editor',
  standalone: true,
    imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
    ],
  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.css'
})

export class NameEditorComponent {
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  nameEntered = '';

  onSubmit() {
    if(this.form.controls.firstName && this.form.controls.lastName) {
      this.nameEntered = this.form.controls.firstName.value + ' ' + this.form.controls.lastName.value;
    }
  }
}
