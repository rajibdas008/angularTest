import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router';
import { of, Observable } from 'rxjs';

@Injectable()

export class customerResolver implements Resolve<Observable<any>>{
    
    constructor(){}

    resolve(){
        return of({id:1,name:'Rajib',address:'Kolkata'});
    }
}