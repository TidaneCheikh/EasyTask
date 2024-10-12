import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';



@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<NewTask >()
  Entertitle='';
  EnterSummary='';
  EnterDate='';


  onCancel() {
    return this.cancel.emit();

}
OnSubmit(){
  this.add.emit({
    title : this.Entertitle,
    summary:this.EnterSummary,
    date : this.EnterDate}
  );
}




}
