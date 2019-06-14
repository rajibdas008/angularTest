import { Injectable } from '@angular/core'
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpResponse} from '@angular/common/http'  
import { Observable, of } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

@Injectable()

export class HttpConfigInterceptor implements HttpInterceptor{

    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        let modifyHeader=request.clone({setHeaders:{
                                           'token':'12345'
                                            }
                                        ,setParams:{
                                            'sort':'-1'
                                        }})
       return next.handle(modifyHeader).pipe(catchError((error)=>{
           console.log(error);
           return of(error);
       }),
       map((event:HttpEvent<any>)=>{
        if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
            // this.errorDialogService.openDialog(event);
        }
        return event;

       }))
    }
}

