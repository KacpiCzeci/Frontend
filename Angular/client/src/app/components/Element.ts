import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.service';
import { TodoService } from '../todo.service';
import axios from 'axios';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-element',
  template: `
    <div class="flex flex-row justify-between my-4 border border-gray-500 rounded-xl p-4">
      <ng-container *ngIf="editedTodo === todo._id; else displayTodo">
        <div class="flex flex-row items-center">
          <input [(ngModel)]="input" (input)="handleChange($event)" autofocus [ngClass]="isValid()" class="block w-full text-sm text-gray-900 rounded-lg bg-white" />
          <button (click)="editElement()" class="pl-4 pr-2 hover:brightness-125 hover:scale-110">
            <img src="assets/approve.svg" width="20px" height="20px" alt="approve.svg" />
          </button>
          <button (click)="closeEdit()" class="pl-2 pr-4 hover:brightness-125 hover:scale-110">
            <img src="assets/cancel.svg" width="20px" height="20px" alt="cancel.svg" />
          </button>
        </div>
      </ng-container>
      <ng-template #displayTodo>
        <p [ngClass]="{'done': todo.done}" class="whitespace-nowrap text-ellipsis overflow-hidden">{{ todo.text }}</p>
      </ng-template>
      <ul class="flex flex-row flex-shrink-0">
        <li class="mx-2">
          <button (click)="setDone(!todo.done)" class="hover:brightness-200 hover:scale-110">
            <img src="assets/done.svg" width="20px" height="20px" alt="done.svg" />
          </button>
        </li>
        <li class="mx-2">
          <button (click)="toggleEdit()" class="hover:brightness-200 hover:scale-110">
            <img src="assets/edit.svg" width="20px" height="20px" alt="edit.svg" />
          </button>
        </li>
        <li class="mx-2">
          <button (click)="deleteElement(todo._id)" class="hover:brightness-200 hover:scale-110">
            <img src="assets/delete.svg" width="20px" height="20px" alt="delete.svg" />
          </button>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .done {
        @apply decoration-4 line-through decoration-red-800;
    }

    .valid {
        @apply border border-white ;
    }

    .valid {
        @apply outline-none ring ring-teal-400;
    }

    .invalid {
        @apply border-2 border-[#db4f4f];
        animation: shake 100ms ease-in-out;
    }

    @keyframes shake{
        0% { transform: translateX(0) }
        25% { transform: translateX(5px) }
        50% { transform: translateX(-5px) }
        75% { transform: translateX(5px) }
        100% { transform: translateX(0) }
    }
  `]
})
export class ElementComponent implements OnInit {
  @Input() todo: Todo = { _id: "", time: new Date(), text: '', done: false};
  editedTodo$: Observable<string>;
  editedTodo: string = "";
  input: string = "";

  constructor(private todoService: TodoService) {
    this.editedTodo$ = this.todoService.getEditedTodo();
  }

  ngOnInit(): void {
    this.editedTodo$.subscribe(value => {
      this.editedTodo = value;
    });
  }

  isValid(): string {
    if(this.input === ''){
        return 'invalid';
    } else {
        return 'valid';
    };
}

  handleChange(event: Event): void {
    this.input = (event.target as HTMLInputElement).value;
  }

  toggleEdit(): void {
    this.todoService.setEditedTodo(this.todo._id);
    this.input = this.todo.text;
  }

  async setDone(done: boolean): Promise<void> {
    const newTodo: Todo = { ...this.todo, done };
    await axios.put(`/api/todos/${this.todo._id}`, newTodo).then(() =>{
      this.todoService.updateTodos();
    });
    if(this.editedTodo===this.todo._id){
      this.closeEdit();
    }
  }

  async editElement(): Promise<void> {
    if(this.input !== ''){
      const newTodo: Todo = { ...this.todo, text: this.input };
      await axios.put(`/api/todos/${this.todo._id}`, newTodo).then(() =>{
          this.closeEdit();
          this.todoService.updateTodos();
      });
    }
  }

  async deleteElement(id: string): Promise<void> {
    await axios.delete(`/api/todos/${id}`).then(() =>{
      this.todoService.updateTodos();
    });
  }

  closeEdit(): void {
    this.todoService.setEditedTodo('');
  }
}
