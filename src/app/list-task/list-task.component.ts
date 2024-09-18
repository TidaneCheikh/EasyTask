import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
onSelectUser() {
throw new Error('Method not implemented.');
}
  @Input() task= DUMMY_USERS;
  test : string ="cheikh"
  //task= DUMMY_USERS;


}
