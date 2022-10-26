import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss'],
})
export class TodoInputAddItemsComponent implements OnInit {
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = '';

  constructor() {}

  ngOnInit(): void {}

  submitItemTaskList(): void {
    const value = this.addItemTaskList.trim();
    if (value) {
      this.emitItemTaskList.emit(value);
      this.addItemTaskList = '';
    }
  }
}
