import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task/task.model';
import { Tasks } from './tasks.service';



@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class tasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  constructor(private tasks : Tasks){}
  isAdd=false;


  get selectedUserTasks() {
    return this.tasks.getUsers(this.userId);
  }

  OnCompleteTask(id:string){
    return this.tasks.OnRemoveTask(id)
  }
  OnAddTask(){
    this.isAdd=true;
  }
  OnCancel(){
    this.isAdd=false;
  }
  OnAddNewTask(taskData : NewTask){
    this.tasks.OnAddTask(taskData,this.userId)
    this.isAdd=false
  }

}
