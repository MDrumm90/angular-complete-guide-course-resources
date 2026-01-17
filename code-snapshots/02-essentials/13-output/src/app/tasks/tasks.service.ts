import { AddTask } from "./adding-new-task/add-task.model";
import { Injectable } from "@angular/core"; 

@Injectable({providedIn: 'root'})
export class TasksService 
{
taskKey : string = 'tasks';
  constructor() {
    const tasks = localStorage.getItem(this.taskKey);

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

private tasks = [
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

  userTasks(userId: string) {
    return this.tasks.filter(t => t.userId === userId);
  }

  addTask(taskData: AddTask) {
    this.tasks.push({ 
      id: taskData.id, 
      userId: taskData.userId, 
      title: taskData.title, 
      summary: taskData.summary, 
      dueDate: taskData.dueDate
    });

    this.SaveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.SaveTasks();
  }

  private SaveTasks() {
    localStorage.setItem(this.taskKey, JSON.stringify(this.tasks));
  }
}