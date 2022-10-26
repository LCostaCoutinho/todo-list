import { Component, DoCheck } from '@angular/core';
import { ITaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<ITaskList> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );

  constructor() {}
  ngDoCheck(): void {
    this.setLocalStorage();
  }

  deleteTask(event: number) {
    this.taskList.splice(event, 1);
  }

  deleteAll() {
    const confirm = window.confirm('Do you really want to delete all stuffs?');
    if (confirm) this.taskList = [];
  }

  setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  validateInput(event: string, index: number) {
    if (
      !event.length &&
      window.confirm('Task is empty, do you want to remove it?')
    ) {
      this.deleteTask(index);
    }
  }

  setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
