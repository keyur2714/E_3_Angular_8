import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyIfDirective } from './my-if.directive';
import { MyLoopDirective } from './my-loop.directive';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    AppComponent,
    MyIfDirective,
    MyLoopDirective,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
