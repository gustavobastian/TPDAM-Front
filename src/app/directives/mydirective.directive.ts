import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})

export class MydirectiveDirective {

  constructor(private el:ElementRef) { 
    
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = 'gray';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'white';
  } 

}
