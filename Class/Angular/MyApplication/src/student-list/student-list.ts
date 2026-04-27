import { Component } from '@angular/core';
import { StudentService } from '../Services/student-service';

@Component({
  selector: 'app-student-list',
  imports: [Component],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: any[] = [];//any[]-> means it can store any type of 
  //Later this will hold student data from the service


  constructor (private studentService:StudentService){}

  ngOnInit(){
    this.students=this.studentService.getStudents();
    console.log(this.students);
    
  }
}
