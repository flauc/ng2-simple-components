import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// Production build
// The app module factory produced by the static offline compiler
// import { AppModuleNgFactory } from './app.module.ngfactory';

import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

// Production build
// Launch with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);