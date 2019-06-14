import { Injectable } from '@angular/core';
import {of, Observable, Subject,ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Api} from '../../api'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers:Array<any>=[];

  constructor(private _http:HttpClient) { }

  addCustomer(customer){
    //this.customers.push(customer);
    this._http.post(Api.url.usersUrl,customer).subscribe((res)=>{
        console.log(res);
    },(err)=>{
      console.log(err);
    })
  }

  getCustomers(){
    //return of(this.customers);

    // const subject=new Observable((ob)=>{
    //    ob.next({id:1,name:'Rajib',address:'Kol'})
    //    //ob.complete();
    //    ob.next({id:2,name:'Rajib1',address:'Kol1'})
    // })
    return this._http.get(Api.url.usersUrl)

    // const subject=new Subject();
    // setTimeout(()=>{
    //   subject.next({id:1,name:'Rajib',address:'Kol'})
    // },2000)

    // const subject=new ReplaySubject();//it emits the previous next value also
    // //setTimeout(()=>{
    //   subject.next({id:1,name:'Rajib',address:'Kol'})
    // //},2000)
    
    //return subject;
  }

  getCustomer(id){
    return of({id:1,name:'Rajib',address:'Kolkata'});

  }
}
