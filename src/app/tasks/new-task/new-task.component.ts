import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { Add } from '../tasks.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter();
  Entertitle='';

  onCancel() {
    return this.cancel.emit();

}




}
