import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { PercentPipeTestComponent } from './percent-pipe-test/percent-pipe-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesTestComponent,
    PercentPipeTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
