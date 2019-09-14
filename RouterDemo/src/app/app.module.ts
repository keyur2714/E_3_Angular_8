import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';
import { PageNotFoundComponent } from './page-notfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    PurchaseComponent,
    ItemEntryComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  //   RouterModule.forRoot([
  //     {path : '', component : HomeComponent},
  // {path: 'home' , component : HomeComponent},
  // {path: 'aboutus', component : AboutUsComponent},
  // {path: 'contactus', component : ContactUsComponent},
  // {path: 'purchase', component : PurchaseComponent},
  // {path: 'addItem', component : ItemEntryComponent},
  // {path: 'editItem/:id', component : ItemEntryComponent},
  // {path: '**', component : PageNotFoundComponent}
  //   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
