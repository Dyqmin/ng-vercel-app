import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { TodosService } from "./todos.service";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  imports: [RouterOutlet, HttpClientModule],
  providers: [TodosService],
  standalone: true,
})
export class AppComponent {}
