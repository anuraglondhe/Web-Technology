import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';   // ✅ ADD THIS
import { Admin } from './admin/admin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,Admin],   // ✅ ADD HERE
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
  fname: string = "Anurag";

  showName() {
    this.fname = "Swapnil";
  }
}