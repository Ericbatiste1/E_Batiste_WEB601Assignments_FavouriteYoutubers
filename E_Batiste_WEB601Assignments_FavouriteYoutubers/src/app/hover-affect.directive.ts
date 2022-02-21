import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() styleEffect?: string;

  constructor(private elm: ElementRef) { 
    this.elm.nativeElement.style.cursor = "pointer";
  }

  @HostListener('mouseover') hovered(typeElm: any) {
    this.elm.nativeElement.style.textDecoration = this.styleEffect ?? "none";
    this.elm.nativeElement.style.fontWeight = this.styleEffect ?? "normal";
  }

  @HostListener('mouseout') notHovered(typeElm: any) {
    this.elm.nativeElement.style.textDecoration = "none";
    this.elm.nativeElement.style.fontWeight = "normal";
  }
  
}
