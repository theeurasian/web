import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[appearOnHover]'
})
export class AppearOnHoverDirective {
  @Input() panel: ElementRef;


  animation = this.builder.build([
    animate(300, style({ opacity: "1"} ))
  ]);
  animationReverse = this.builder.build([
    animate(300, style({ opacity: "0"} ))
  ]);

  constructor(private builder: AnimationBuilder) {

  }

  animate(element: ElementRef){
    if (element != null){
      this.animation.create(element.nativeElement).play();
    }
  }
  animateReverse(element: ElementRef){
    if (element != null){
      this.animationReverse.create(element.nativeElement).play();
    }
  }
}
