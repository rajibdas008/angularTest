import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { customerResolver } from './resolver/customerDetailReslover';



const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path:'add',
    component:CustomerAddComponent
  },
  {
    path:'customer/:id',
    component:CustomerDetailsComponent,
    //resolve:{customer:customerResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
