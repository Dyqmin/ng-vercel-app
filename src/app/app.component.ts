import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NgSwitch } from "@angular/common";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  imports: [RouterOutlet, NgSwitch],
  standalone: true,
})
export class AppComponent {}
