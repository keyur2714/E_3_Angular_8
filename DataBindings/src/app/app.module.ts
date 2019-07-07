import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Required for NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
