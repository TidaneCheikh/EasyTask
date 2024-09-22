import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
@Input() name !: string;

}
