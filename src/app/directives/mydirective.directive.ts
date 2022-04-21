import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})

export class MydirectiveDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.height = "10px" ;    
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.height = '50px';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.height = '70px';
  } 

}
