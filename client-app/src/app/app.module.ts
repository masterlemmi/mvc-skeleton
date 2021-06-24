import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CoreModule} from './core/core.module'
import {SharedModule} from './shared/shared.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
