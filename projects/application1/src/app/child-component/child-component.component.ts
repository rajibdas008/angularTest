import { Component, OnInit, Input,EventEmitter, Output, HostListener, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
   
  @Input('title') pageTitle;
  @Output() changeParent:EventEmitter<any>=new EventEmitter();
  constructor(private el:ElementRef,private renderer:Renderer) {
    //console.log('child contructor');
   }
  
  ngOnInit() {
    //console.log('child ngOnInit');
    console.log(this.el.nativeElement);
    console.log(this.renderer);
  }

  click(){
    this.changeParent.emit('From child');
  }

  @HostListener('mouseover') mouseOver(){
    console.log("mouse over child");
  }


  // ngOnChanges(){
  //   console.log('child ngOnChanges');
  // }

  // ngDoCheck(){
  //   console.log('child ngDoCheck');
  // } // ngOnChanges(){
  //   console.log('child ngOnChanges');
  // }

  // ngDoCheck(){
  //   console.log('child ngDoCheck');
  // }

  // ngAfterContentInit(){
  //   console.log('child ngAfterContentInit');
  // }

  // ngAfterContentChecked(){
  //   console.log('child ngAfterContentChecked');
  // }

  // ngAfterViewInit(){
  //   console.log('child ngAfterViewInit');
  // }

  // ngAfterViewChecked(){
  //   console.log('child ngAfterViewChecked');
  // }

  // ngOnDestroy(){
  //   console.log('child destroy');
  // }

  // ngAfterContentInit(){
  //   console.log('child ngAfterContentInit');
  // }

  // ngAfterContentChecked(){
  //   console.log('child ngAfterContentChecked');
  // }

  // ngAfterViewInit(){
  //   console.log('child ngAfterViewInit');
  // }

  // ngAfterViewChecked(){
  //   console.log('child ngAfterViewChecked');
  // }

  // ngOnDestroy(){
  //   console.log('child destroy');
  // }

}
