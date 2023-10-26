import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '../node_modules/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
