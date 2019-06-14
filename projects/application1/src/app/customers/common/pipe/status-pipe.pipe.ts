import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){
      return value==1?'approve':'reject'
    }else{
      return 'pending';
    }
  }

}
