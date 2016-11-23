import 'core-js'; // polyfills
import 'zone.js/dist/zone'; // async

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app.component';

@NgModule({
  imports:[
    BrowserModule
  ],
  declarations: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
