import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy';
import { AddtaskComponent } from '../addtask/addtask.component';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [AddtaskComponent],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
  @Input() id! : string ;
  @Input() avatar! : string ;
  @Input({required:true}) name! : string ;

  OnSelectUser(){
    console.log(this.name);


  }
  //task= DUMMY_USERS;


}
