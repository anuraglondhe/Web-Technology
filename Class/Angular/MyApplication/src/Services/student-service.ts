import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    {name: 'Anurag', age: 20, course: 'CE'},
    {name: 'Swapnil', age: 21, course: 'IT'},
    {name: 'Om', age: 22, course: 'ME'}
  ];

  getStudents(){
    return this.students;
  }
}
