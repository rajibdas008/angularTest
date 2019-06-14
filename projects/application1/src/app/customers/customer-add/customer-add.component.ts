import { Component, OnInit,Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  files:any;
  
  customerForm=new FormGroup({
    id:new FormControl('',[
      Validators.required
    ]),
    name:new FormControl(),
    address:new FormControl,
    status:new FormControl,
    profilePic:new FormControl,
  }); 
  constructor(private customerService:CustomerService) { } 

  ngOnInit() {
  }

  submit(){
    let formdata=new FormData();
    formdata.append('file',this.files)
    console.warn(this.customerForm);
    //this.customerService.addCustomer(this.customerForm.value);
    this.customerService.addCustomer(formdata);
  }

  selectFile(event){
    console.log(event.target.files);
    this.files=event.target.files[0];
  }

}
