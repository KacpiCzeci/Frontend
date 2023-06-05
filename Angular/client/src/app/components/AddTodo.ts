import { Component } from "@angular/core";
import axios from 'axios';
import { TodoService } from "../todo.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-add-todo',
    template: `
         <form [formGroup]="form" (ngSubmit)="addTodo()" class="relative">
            <input type="text" formControlName="textInput" [ngClass]="isValid()" class="block w-full p-2 pl-10 text-sm text-gray-900 rounded-lg bg-white focus:outline-none focus:ring focus:ring-teal-400" placeholder="Add Todo..." />
            <button type="submit" class="absolute inset-y-0 left-0 flex items-center pl-3 hover:brightness-200 hover:scale-110">
                <img src="assets/add.svg" class="w-5 h-5 text-gray-500" alt="add.svg" />
            </button>
        </form>
    `,
    styles: [`
        .valid {
            @apply border border-white ;
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
export class AddTodo {
    name: string = '';
    form: FormGroup;

    constructor(private todoService: TodoService, 
        private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            textInput: ['', Validators.required]
          });
    }

    isValid(): string {
        if(this.form.controls["textInput"].invalid && !this.form.controls["textInput"].pristine){
            return 'invalid';
        } else {
            return 'valid';
        };
    }

    async addTodo() {
        if (this.form.valid) {
            try {
                const response = await axios.post(`/api/todos`, {
                text: this.name,
                done: false
                });
                this.todoService.updateTodos();
            } catch (error) {
                console.log(error);
            }
            this.name = '';
        }
    }
}
