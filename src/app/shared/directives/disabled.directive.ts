import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDisabled]'
})
export class DisabledDirective implements OnChanges {

  @Input() appDisabled = false;

  @HostListener('click', ['$event']) onClick(event: any): void {
    event.preventDefault();
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    //
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['appDisabled']?.currentValue){
      this.renderer.addClass(this.el.nativeElement,'disabled');
    } else {
      this.renderer.removeClass(this.el.nativeElement,'disabled');
    }
  }

}
