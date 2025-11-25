import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { type AddTask } from './add-task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Input() userId!: string;
  @Output() addTask = new EventEmitter<AddTask>();
  @Output() close = new EventEmitter<void>();

  title = '';
  summary = '';
  dueDate: Date = new Date();

  private generateId() {
    return 't' + Date.now().toString(36);
  }

  onAdd() {
    if (!this.title) {
      return;
    }

    const  newTask: AddTask = {
      id: this.generateId(),
      userId: this.userId,
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    };

    this.addTask.emit(newTask);
    this.reset();
    this.close.emit();
  }

  onSubmit(){
    this.onAdd();
  }

  onCancel(){
    this.reset();
    this.close.emit();
  }

  private reset(){
    this.title = '';
    this.summary = '';
    this.dueDate = new Date();
  }
}
