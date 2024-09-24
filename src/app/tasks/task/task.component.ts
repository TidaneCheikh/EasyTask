import { Component, Input } from '@angular/core';
import { tasksComponent } from '../tasks.component';
import { Task } from './task.model';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [tasksComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
}
