import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { customerResolver } from './resolver/customerDetailReslover';
import { StatusPipePipe } from './common/pipe/status-pipe.pipe';


@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CustomerListComponent, CustomerAddComponent, CustomerDetailsComponent, StatusPipePipe],
  providers:[customerResolver],
  exports:[
    CustomerListComponent
  ]
})
export class CustomersModule { }
