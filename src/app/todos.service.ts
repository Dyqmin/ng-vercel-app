import { inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "./todo";
import { map, Observable, tap } from "rxjs";

@Injectable()
export class TodosService {
  todos = signal<Todo[]>([]);

  private readonly _http = inject(HttpClient);

  getTodos(): Observable<Todo[]> {
    return this._http.get<{ todos: Todo[] }>('/api/todo').pipe(
      map((resp) => resp.todos),
      tap((todos) => this.todos.set(todos))
    );
  }

  addTodo(description: string): Observable<void> {
    return this._http.post<void>('/api/todo', {
      description
    });
  }
}
