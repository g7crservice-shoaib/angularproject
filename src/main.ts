// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule, {
//   ngZoneEventCoalescing: true
// })
//   .catch(err => console.error(err));



  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/ngsw-worker.js')
    .then((registration) => {
      console.log('Service Worker registered', registration);
    })
    .catch(err => {
      console.error('Service Worker registration failed', err);
    });
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
}).catch(err => console.error(err));
