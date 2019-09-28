import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SalesComponent } from './sales/sales.component';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './signin/signin.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { SignoutComponent } from './signout/signout.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';


const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'home', component : HomeComponent},
  { path : 'contactus', component : ContactusComponent},
  { path : 'aboutus', component : AboutusComponent},
  { path : 'sales', component : SalesComponent},
  { path : 'admin', component : AdminComponent,canActivate : [AuthGuardService],
    children : [
      {
        path : 'manage-products' , component : ProductListComponent,
        canActivateChild : [AuthGuardService],
        children : [
          {path : 'detail/:id' , component : ProductDetailComponent}
        ]
      },
      {path : 'manage-users' , component : UserListComponent}
    ]    
  },
  { path : 'signin', component : SigninComponent},
  { path : 'signout', component : SignoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
