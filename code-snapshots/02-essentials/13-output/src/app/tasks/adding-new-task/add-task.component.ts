import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { type AddTask } from './add-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Input() userId!: string;
  @Output() close = new EventEmitter<void>();

  title = '';
  summary = '';
  dueDate: Date = new Date();
  tasksService: TasksService;

  private generateId() {
    return 't' + Date.now().toString(36);
  }

  constructor(taskService: TasksService) {
    this.tasksService = taskService;
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

    this.tasksService.addTask(newTask);
    this.reset();
    this.close.emit();
  }

  onSubmit(){
     const  newTask: AddTask = {
      id: this.generateId(),
      userId: this.userId,
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    };
    this.tasksService.addTask(newTask);
    this.close.emit();
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
