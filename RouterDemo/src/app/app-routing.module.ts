import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';
import { PageNotFoundComponent } from './page-notfound.component';


const routes: Routes = [
  {path : '', component : HomeComponent},
  {path: 'home' , component : HomeComponent},
  {path: 'aboutus', component : AboutUsComponent},
  {path: 'contactus', component : ContactUsComponent},
  {path: 'purchase', component : PurchaseComponent},
  {path: 'addItem', component : ItemEntryComponent},
  {path: 'editItem/:id', component : ItemEntryComponent},
  {path: '**', component : PageNotFoundComponent}
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
