import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApiModule, BASE_PATH } from '../recipecate-api-client';
import { environment } from '../environments/environment';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';


export const appConfig: ApplicationConfig = {
  providers: [
    ApiModule,
    { provide: BASE_PATH, useValue: environment.apiUrl },
    provideHttpClient(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'fr'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
  ]
};
