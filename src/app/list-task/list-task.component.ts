import { Component, Input, Output,EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy';
import {  tasksComponent } from '../tasks/tasks.component';

interface User{
  id:string;
  avatar : string ;
  name : string ;

}
@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [tasksComponent],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})


export class ListTaskComponent {
  @Input({required:true}) user! : User;
  @Output() select = new EventEmitter();

  OnSelectUser(){
    this.select.emit(this.user.id)


  }
  //task= DUMMY_USERS;


}
