import { Component } from '@angular/core';
import { TodoService } from "../todo.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="bg-white">
    <div class="sticky top-[70px] z-50 bg-white border-b border-teal-500">
        <ul class="flex flex-row flex-nowrap -mb-px text-sm font-medium text-center text-teal-500">
        <li *ngFor="let tab of tabConfig" class="w-full mr-2">
            <button (click)="setActiveTab(tab.id)" [ngClass]="(activeTab$ | async) === tab.id? 'active' : 'inactive'" class="flex w-full justify-center p-4 border-b-4 rounded-t-lg hover:text-teal-300">
            {{ tab.label }}
            </button>
        </li>
        </ul>
    </div>
    <div class="w-full">
        <ng-container *ngFor="let tab of tabConfig">
          <ng-container *ngIf="(activeTab$ | async) === tab.id">
              <app-todo-tab *ngIf="tab.id === 1"></app-todo-tab>
              <app-done-tab *ngIf="tab.id === 2"></app-done-tab>
          </ng-container>
        </ng-container>
    </div>
    </div>
  `,
  styles: [`
    .active {
        @apply border-teal-500;
    }

    .inactive {
        @apply border-transparent;
    }
  `]
})
export class TabsComponent {
  tabConfig = [
    { id: 1, label: "To do" },
    { id: 2, label: "Done" }
  ];

  activeTab$: Observable<number>;

  constructor(private todoService: TodoService) {
    this.activeTab$ = this.todoService.getActiveTab();
  }

  setActiveTab(tabId: number): void {
    this.todoService.setActiveTab(tabId);
  }
}

