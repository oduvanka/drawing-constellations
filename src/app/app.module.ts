import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DrawerLibraryModule } from 'angular5-canvas-drawer/lib/build/drawer-library.module';

import { AppComponent } from './app.component';
import { SkyComponent } from './sky/sky.component';

@NgModule({
  declarations: [
    AppComponent,
    SkyComponent
  ],
  imports: [
    BrowserModule,
    DrawerLibraryModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
