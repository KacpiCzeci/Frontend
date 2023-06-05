import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import axios from 'axios';

export interface Todo {
    _id: string;
    time: Date;
    text: string;
    done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private dones: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private activeTab: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private editedTodo: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
    this.updateTodos();
  }

  getTodos(): Observable<Todo[]> {
    return this.todos.asObservable();
  }

  getDones(): Observable<Todo[]> {
    return this.dones.asObservable();
  }

  getActiveTab(): Observable<number> {
    return this.activeTab.asObservable();
  }

  getEditedTodo(): Observable<string> {
    return this.editedTodo.asObservable();
  }

  setActiveTab(activeTab: number): void {
    this.activeTab.next(activeTab);
  }

  setEditedTodo(editedTodo: string): void {
    this.editedTodo.next(editedTodo);
  }

  async updateTodos(): Promise<void> {
    try {
      const { data } = await axios.get('/api/todos');
      const todos = data.filter((item: Todo) => !item.done);
      const dones = data.filter((item: Todo) => item.done);
      this.todos.next(todos);
      this.dones.next(dones);
    } catch (error) {
      console.log(error);
    }
  }
}
