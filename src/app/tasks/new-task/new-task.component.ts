import { Component, EventEmitter, NgModule, output, Output } from '@angular/core';
import { Add } from '../tasks.model';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { title } from 'process';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter();
  @Output() Newtask = new EventEmitter<NewTask >()
  Entertitle='';
  EnterSummary='';
  EnterDate='';


  onCancel() {
    return this.cancel.emit();

}
OnSubmit(){
  return this.Newtask.emit({
    title : this.Entertitle,
    summary:this.EnterSummary,
    date : this.EnterDate}
  );
}




}
