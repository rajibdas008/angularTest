import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:any=[]; 
  link:any;
  constructor(private customerService:CustomerService) { 
    console.log('constructor');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngOnInit() {
    this.getCustomers();
    console.log('ngOnInit');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('destroy');
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe((res:any)=>{
      if(res.status==1){
        console.log(res.result);
        this.customers=[...res.result];
        console.log(this.customers);
      }
     
    });
  }

}
