import {enableProdMode, importProvidersFrom} from '@angular/core';

import { environment } from './environments/environment';

import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";

import {AnalyticsService} from "./app/services/analytics.service";
import {AppRoutingModule} from "./app/app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    AnalyticsService,
    importProvidersFrom(AppRoutingModule, BrowserAnimationsModule)
  ]
}).then().catch(err => console.error(err));
