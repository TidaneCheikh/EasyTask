import { Component, Input } from '@angular/core';
import { tasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from "./header/header.component";
import { ListTaskComponent } from './list-task/list-task.component';
import { DUMMY_USERS } from './dummy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,ListTaskComponent,tasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  tasks =DUMMY_USERS;
  userSelect ="u1";

  get SelectUser(){
    return this.tasks.find((task) =>task.id === this.userSelect)!;
  }


  OnSelectUser(id :string){
   this.userSelect=id
  }

}
