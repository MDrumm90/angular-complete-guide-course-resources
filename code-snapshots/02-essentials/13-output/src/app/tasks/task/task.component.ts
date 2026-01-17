import { Component, Input } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})


export class TaskComponent {
 @Input() task!: Task;
 private tasksService: TasksService;
 
constructor(taskService: TasksService) {
   this.tasksService = taskService;
}
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
