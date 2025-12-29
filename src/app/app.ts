import { Component, signal } from '@angular/core';
import { Inputfeilds } from './inputfeilds/inputfeilds';

@Component({
  selector: 'app-root',
  imports: [Inputfeilds],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
