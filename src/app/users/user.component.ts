import { Component, Input, Output,EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy';
import {  tasksComponent } from '../tasks/tasks.component';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [tasksComponent, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class ListTaskComponent {
  @Input({required:true}) users! : User;
  @Input({required :true }) Selected !:boolean;
  @Output() select = new EventEmitter();

  OnSelectUser(){
    this.select.emit(this.users.id)


  }
  //task= DUMMY_USERS;


}
