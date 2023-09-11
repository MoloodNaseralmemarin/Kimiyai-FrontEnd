import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const value = this.el.nativeElement.value;
switch (value) {
      case '21':
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'pink');
        break;
      case '22':
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
        break;
      case '23':
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'orange');
        break;
      default:
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    }
  }
}

