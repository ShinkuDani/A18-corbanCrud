import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { CorbanServiceService } from './services/corban-service.service';
import { loggerInterceptor } from './interceptors/logger.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
     provideClientHydration(),
     provideHttpClient(
      withFetch(),
      withInterceptors([loggerInterceptor])
     ),
     CorbanServiceService]
};
