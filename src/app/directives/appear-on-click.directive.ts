import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[appearOnClick]'
})
export class AppearOnClickDirective {
  @Input() panel: ElementRef;

  animation = this.builder.build([
    animate(0, style({ transform: "scale(0.3, 0.3)" } )),
    animate(300, style({ transform: "scale(1, 1)" } ))
  ]);
  animationWithDelay = this.builder.build([
    animate(200, style({  } )),
    animate(300, style({ transform: "translateX(-50px)", color: "black"} ))
  ]);

  constructor(private builder: AnimationBuilder) {

  }
  animate(element: ElementRef, withDelay = false){
    if (element != null){
      if (!withDelay){
        this.animation.create(element.nativeElement).play();
      }
      else{
        this.animationWithDelay.create(element.nativeElement).play();
      }
    }
  }
}
