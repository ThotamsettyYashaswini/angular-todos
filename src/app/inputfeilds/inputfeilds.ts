import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inputfeilds',
  imports: [FormsModule],
  templateUrl: './inputfeilds.html',
  styleUrl: './inputfeilds.css',
})
export class Inputfeilds {
  task = '';
  taskList: { id: number; task: string }[] = [];
  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, task: this.task });
    console.log(this.taskList);
  }
}
