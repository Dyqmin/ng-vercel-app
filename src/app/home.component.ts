import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { TodosService } from "./todos.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { switchMap } from "rxjs";

@Component({
  selector: 'app-home',
  template: `
    <ng-container *ngIf="todosService.todos() as todos">
      <div *ngFor="let todo of todos">
        {{ todo.description }}
      </div>
    </ng-container>
    <input type="text" #desc (input)="description.set(desc.value)" />
    <button (click)="addTodo()">Add Todo</button>
  `,
  imports: [AsyncPipe, NgIf, NgFor],
  standalone: true,
})
export class HomeComponent implements OnInit {
  description = signal<string>('');

  readonly todosService = inject(TodosService);
  private readonly _destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.todosService.getTodos().pipe(
      takeUntilDestroyed(this._destroyRef),
    ).subscribe();
  }

  addTodo(): void {
    this.todosService.addTodo(this.description()).pipe(
      switchMap(() => this.todosService.getTodos()),
      takeUntilDestroyed(this._destroyRef),
    ).subscribe();
  }
}
