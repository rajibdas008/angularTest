import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private custService:CustomerService) { }
  currentId:any;
  customerDetails:any;
  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{

      console.log(params);
    })
    console.log(this.route.snapshot.params)
    this.currentId=this.route.snapshot.params._id;
    //calling the service 
    // this.custService.getCustomer(this.currentId).subscribe((res)=>{
    //   this.customerDetails=res;
    // })


    //get data from reslover
    this.customerDetails=this.route.snapshot.data.customer;
  }

  back(){
    this.router.navigate(['/customers'])
  }

}
