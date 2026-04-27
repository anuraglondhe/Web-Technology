import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Student],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exp08');
  name : string = "Swapnil";
  PRN : string = "24UAM301";
  dept : string = "AIML";

  changeName(){
    if(this.name === "Swapnil"){
      this.name = "Swapnil Bhosale";
    }
    else{
      this.name = "Swapnil";
    }
  }

  cityArr :string[] = ['Pune','Sangli','Kolhapur'];
}