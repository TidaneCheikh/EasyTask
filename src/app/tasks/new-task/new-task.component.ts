import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tasks } from '../tasks.service';



@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!:string;
  @Output() close = new EventEmitter<void>();

  private tasks = inject(Tasks);
  Entertitle='';
  EnterSummary='';
  EnterDate='';


  onCancel() {
    this.close.emit();

}
OnSubmit(){
  this.tasks.addTask({
    title : this.Entertitle,
    summary:this.EnterSummary,
    date : this.EnterDate
  },this.userId
  );
  this.close.emit();
}




}
