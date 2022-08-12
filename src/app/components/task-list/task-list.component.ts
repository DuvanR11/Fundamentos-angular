import { ITask, Levels } from './../../models/interfaces/Task.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  // TODO: reformular como una lista de tareas

  task1: ITask = {
    title: 'Tarea 1',
    description: 'Description 1',
    completed: false,
    level: Levels.Info
  }

  task2: ITask = {
    title: 'Tarea 2',
    description: 'Description 2',
    completed: true,
    level: Levels.Blocking
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: ITask){
    alert(`se procede a eliminar tarea ${task.title}`)
  }
}
