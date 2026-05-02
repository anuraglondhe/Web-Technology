import { Component, signal } from '@angular/core';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Student],          // ✅ Removed RouterOutlet (not needed)
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exp08');
  // ✅ Removed name, PRN, dept, changeName, cityArr 
  //    (they belong to Student component)
}