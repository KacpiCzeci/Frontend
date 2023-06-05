import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-done-tab',
  template: `
    <div class="grid grid-cols-1 mx-10 my-6">
      <app-element *ngFor="let done of dones$ | async" [todo]="done"></app-element>
    </div>
  `
})
export class DoneTabComponent {
  dones$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.dones$ = this.todoService.getDones();
  }
}
