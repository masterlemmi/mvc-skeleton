import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SampleComponent } from './sample/sample.component';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, SampleComponent],
  imports: [
    SharedModule, AppRoutingModule
  ],
  exports: [HeaderComponent, AppRoutingModule ,  HomeComponent],
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}