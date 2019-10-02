import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
    declarations :[
        AdminComponent,
        ProductListComponent,
        UserListComponent,
        ProductDetailComponent
    ],
    imports : [
        CommonModule,
        AdminRoutingModule
    ],
    providers : [],
    bootstrap :[]
})
export class AdminModule {
    constructor(){
        console.log("Admin Module Loaded...");
    }
}