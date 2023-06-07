import { Component, inject } from '@angular/core';
import { ApiService } from './api.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { TodosService } from "./todos.service";

@Component({
  selector: 'app-home',
  template: `<ng-container *ngIf="todos$ | async as todos">
    <div *ngFor="let todo of todos">
      {{ todo.description }}
    </div>
  </ng-container>
  <input type="text" />
  <button (click)="addTodo()">Add Todo</button>
  `,
  imports: [AsyncPipe, NgIf, NgFor],
  standalone: true,
})
export class HomeComponent {
  private readonly _todosService = inject(TodosService);
  readonly todos$ = this._todosService.getTodos();

  addTodo() {
  }
}
