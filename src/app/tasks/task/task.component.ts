import { Component, Input, Output,EventEmitter } from '@angular/core';
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
  @Output() complete = new EventEmitter<string>();

  OnCompleteTask(){
    this.complete.emit(this.task.id);
  }


}
