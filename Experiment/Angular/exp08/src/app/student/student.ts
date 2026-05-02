import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],  // ✅ Required imports
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  
  // ✅ Moved properties here from app.ts
  name: string = "Anurag";
  PRN: string = "22UAI065";
  dept: string = "AIML";

  cityArr: string[] = ['Pune', 'Sangli', 'Kolhapur'];

  // ✅ Moved method here from app.ts
  changeName() {
    if (this.name === "Anurag") {
      this.name = "Anurag Londhe";
    } else {
      this.name = "Anurag";
    }
  }
}