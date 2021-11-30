import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
  selector: '[highLightOnHover]'
})
export class HighLightOnHoverDirective {
  @Input() color: string;

  animationIn = this.builder.build([
    animate(300, style([{ transform: 'translateY(-3px)' }, { opacity: '1'}, { color: 'red'}]))
  ]);
  animationOutBlack = this.builder.build([
    animate(300, style([{ transform: 'translateY(0px)' }, { opacity: '1'}, { color: 'white'}]))
  ]);
  animationOutWhite = this.builder.build([
    animate(300, style([{ transform: 'translateY(0px)' }, { opacity: '1'}, { color: 'white'}]))
  ]);
  constructor(private elementRef:ElementRef, private renderer:Renderer2, private builder: AnimationBuilder) {

  }


  @HostListener('mouseenter') mouseover(){
    this.animationIn.create(this.elementRef.nativeElement).play();
  }

  @HostListener('mouseleave') mouseleave(){
    if (this.color == "white"){
      this.animationOutWhite.create(this.elementRef.nativeElement).play();
    }
    else{
      this.animationOutBlack.create(this.elementRef.nativeElement).play();
    }
  }
}
