import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SalesComponent } from './sales/sales.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'home', component : HomeComponent},
  { path : 'contactus', component : ContactusComponent},
  { path : 'aboutus', component : AboutusComponent},
  { path : 'sales', component : SalesComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule), canActivate : [AuthGuardService] },  
  { path : 'signin', component : SigninComponent},
  { path : 'signout', component : SignoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("App Routing Module Loaded...");
  }
}
