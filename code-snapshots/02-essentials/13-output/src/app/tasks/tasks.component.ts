import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from './adding-new-task/add-task.component';
import { type AddTask } from './adding-new-task/add-task.model';

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

  showAddDialog = false;

  onAddTask(newTask: AddTask) {
    this.tasks.push({ 
      id: newTask.id, 
      userId: newTask.userId, 
      title: newTask.title, 
      summary: newTask.summary, 
      dueDate: newTask.dueDate
    });
    this.tasks = [...this.tasks];
    console.log('Added task', newTask);
  }

  onStartAddTask() {
    this.showAddDialog = true;
  }

  onEndAddingTask() {
    this.showAddDialog = false;
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    console.log(`Task with ID ${taskId} is completed!`);
    this.showAddDialog = false;
  }

  get usersTasks() {
    return this.tasks.filter(t => t.userId === this.userId);
  }

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: new Date(2025, 11, 31),
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: new Date(2024, 4, 31),
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: new Date(2024, 5, 15),
    },
  ];
}
