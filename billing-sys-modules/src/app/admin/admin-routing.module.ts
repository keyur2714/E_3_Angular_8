import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const adminRoutes : Routes = [
    { 
        //path : 'admin', component : AdminComponent,canActivate : [AuthGuardService], //req for Eager Loading
        path : '' , component : AdminComponent,
        children : [
        {
            path : 'manage-products' , component : ProductListComponent,
            canActivateChild : [AuthGuardService],
            children : [
            {
                path : 'detail/:id' , component : ProductDetailComponent}
            ]
        },
        {
            path : 'manage-users' , component : UserListComponent}
        ]    
    }
]
@NgModule({
    imports : [
        RouterModule.forChild(adminRoutes)
    ],
    exports : [
        RouterModule
    ]
})
export class AdminRoutingModule {
    constructor(){
        console.log("Admin Routing Module Loaded...!");
    }    
}