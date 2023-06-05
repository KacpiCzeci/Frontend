import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-tab',
  template: `
    <div class="grid grid-cols-1 mx-10 my-6">
      <app-element *ngFor="let todo of todos$ | async" [todo]="todo"></app-element>
    </div>
  `
})
export class TodoTabComponent {
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getTodos();
  }
}