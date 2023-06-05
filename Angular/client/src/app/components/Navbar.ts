import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    template: `
        <nav class="sticky top-0 z-50 border-gray-200 bg-teal-500">
            <div class="flex flex-nowrap items-center justify-between p-4">
                <div class="flex items-center">
                    <img src="assets/icon.svg" class="h-8 mr-3" alt="ToDo Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Todo List</span>
                </div>
                <div class="flex">
                    <app-add-todo></app-add-todo>
                </div>
            </div>
        </nav>  
    `
  })
  export class NavbarComponent {}
  