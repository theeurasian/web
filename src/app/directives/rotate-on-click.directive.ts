import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[rotateOnClick]'
})
export class RotateOnClickDirective {

  firstClick = false;
  animationIn = this.builder.build([
    animate(200, style({ transform: 'rotate(0.25turn)'}))
    //animate(400, style({ transform: 'rotate(0turn)'}))
  ]);
  animationOut = this.builder.build([
    animate(200, style({ transform: 'rotate(0turn)'}))
  ]);
  constructor(private elementRef:ElementRef, private renderer:Renderer2, private builder: AnimationBuilder) {

  }
  @HostListener('document:click', ['$event']) click(event) {
    if (this.elementRef.nativeElement.contains(event.target) && !this.firstClick) {
      this.animationIn.create(this.elementRef.nativeElement).play();
      this.firstClick = true;
    } else {
      this.animationOut.create(this.elementRef.nativeElement).play();
      this.firstClick = false;
    }
  }
}
