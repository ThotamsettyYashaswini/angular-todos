import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service'; // Import the service

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {
  tasks: Task[] = [];
  
  // Use constructor injection to get TaskService
  constructor(private taskService: TaskService) {}
  
  ngOnInit(): void {
    console.log('TaskList component initialized');
    this.tasks = this.taskService.getTasks(); // Now this will work
  }
}