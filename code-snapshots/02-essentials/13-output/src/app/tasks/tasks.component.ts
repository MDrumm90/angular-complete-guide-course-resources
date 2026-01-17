import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from './adding-new-task/add-task.component';
import { type AddTask } from './adding-new-task/add-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId!: string;
   private tasksService: TasksService;
  showAddDialog = false;

  constructor(taskService: TasksService) {
    this.tasksService = taskService;
  }
    
 get selectedUserTasks(){
  return this.tasksService.userTasks(this.userId);
 }


  onAddTask(newTask: AddTask) {
    this.tasksService.addTask(newTask);
  }

  onStartAddTask() {
    this.showAddDialog = true;
  }

  onCloseAddTask() {
    this.showAddDialog = false;
  }

  get usersTasks() {
    return this.tasksService.userTasks(this.userId);
  }
}
