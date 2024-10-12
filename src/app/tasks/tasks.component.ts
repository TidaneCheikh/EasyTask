import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './new-task/new-task.model';


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
  isAdd=false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-16',
    },
  ];

  get selectedUserTasks() {

    return this.tasks.filter((task) => task.userId === this.userId);
  }

  OnCompleteTask(id:string){
    this.tasks= this.tasks.filter((task)=> task.id !== id)
  }
  OnAddTask(){
    this.isAdd=true;
  }
  OnCancel(){
    this.isAdd=false;
  }
  OnAddNewTask(taskData : NewTask){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title:   taskData.title,
      summary:taskData.summary,
      dueDate: taskData.date,
    });
    this.isAdd=false
  }

}
