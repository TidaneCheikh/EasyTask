import { Component, Input } from '@angular/core';
import { AddtaskComponent } from './addtask/addtask.component';
import { HeaderComponent } from "./header/header.component";
import { ListTaskComponent } from './list-task/list-task.component';
import { DUMMY_USERS } from './dummy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,ListTaskComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
