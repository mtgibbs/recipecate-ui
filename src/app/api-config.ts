import { ApiConfiguration } from './api/api-configuration';
import { environment } from 'src/environments/environment';
import { APP_INITIALIZER, Provider } from '@angular/core';

export function initApiConfiguration(config: ApiConfiguration): Function {
    return () => {
        config.rootUrl = environment.apiUrl;
    };
}

export const INIT_API_CONFIGURATION: Provider = {
    provide: APP_INITIALIZER,
    useFactory: initApiConfiguration,
    deps: [ApiConfiguration],
    multi: true
};
