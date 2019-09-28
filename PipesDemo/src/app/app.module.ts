import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { LoopPipePipe } from './loop-pipe.pipe';
import { MaskPipe } from './mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    LoopPipePipe,
    MaskPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
