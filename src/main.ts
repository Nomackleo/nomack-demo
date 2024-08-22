import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RendererFactory2 } from '@angular/core';

bootstrapApplication(
  AppComponent,
  appConfig
  // providers: [{ provide: RendererFactory2, useClass: appConfig }],
).catch((err) => console.error(err));
