import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application1';

  displayValue(event){
    console.log(event);
     this.title=event;
  }

  constructor(){
    //console.log('parent contructor');
  }

  ngOnInit(){
    //console.log('parent ngOnInit');
  }

  // ngOnChanges(){
  //   console.log('parent ngOnChanges');
  // }

  // ngDoCheck(){
  //   console.log('parent ngDoCheck');
  // }

  // ngAfterContentInit(){
  //   console.log('parent ngAfterContentInit');
  // }

  // ngAfterContentChecked(){
  //   console.log('parent ngAfterContentChecked');
  // }

  // ngAfterViewInit(){
  //   console.log('parent ngAfterViewInit');
  // }

  // ngAfterViewChecked(){
  //   console.log('parent ngAfterViewChecked');
  // }

  // ngOnDestroy(){
  //   console.log('parent destroy');
  // }
}
