import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((reg) => console.log('Vanilla SW registrado con éxito:', reg.scope))
          .catch((err) => console.warn('SW registro falló:', err));
      });
    }
  })
  .catch((err) => console.error(err));
