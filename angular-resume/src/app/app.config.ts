import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// This is the simplified configuration for a browser-only application.
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};

