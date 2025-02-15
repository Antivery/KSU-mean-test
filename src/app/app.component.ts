import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileEditorComponent } from './componets/profile-editor/profile-editor.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileEditorComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mean-test';
  name = 'Anthony Ivery'
  date = '01/26/2025'
  formName = 'Profile Editor'
}
