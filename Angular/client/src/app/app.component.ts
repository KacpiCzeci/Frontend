import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-w-[440px]">
      <app-navbar></app-navbar>
      <app-tabs></app-tabs>
    </div>
  `
})
export class AppComponent {
  loading: boolean = false;

  constructor(private todoService: TodoService) {
    this.todoService.updateTodos();
  }
}

