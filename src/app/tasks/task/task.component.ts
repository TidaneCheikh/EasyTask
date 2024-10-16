import { Component, Input, Output,EventEmitter, inject } from '@angular/core';
import { tasksComponent } from '../tasks.component';
import { Task } from './task.model';
import { Tasks } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [tasksComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private taskservice = inject(Tasks);

  OnCompleteTask(){
    this.taskservice.OnRemoveTask(this.task.id);
  }


}
