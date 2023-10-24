import { APP_INITIALIZER, isDevMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { inject } from "@vercel/analytics";

import { AppComponent } from "./app/app.component";
import { routes } from "./app/routes";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        inject({ mode: isDevMode() ? 'development' : 'production' })
      }
    }
  ]
})
  .catch(err => console.error(err));
