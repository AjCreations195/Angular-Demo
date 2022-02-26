import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() highlight:string='yellow'
 @Input('appBetterHighlight') defaultColor:string='blue'
 @HostBinding('style.backgroundColor') backgroundColor:string
  constructor(
    private elRef:ElementRef,
    private renderer:Renderer2
  ) { }
  ngOnInit(): void {
    this.backgroundColor=this.defaultColor
   this.renderer.setStyle(this.elRef.nativeElement,'color','black');
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    this.backgroundColor=this.highlight
   }
  @HostListener('mouseleave') mouseleave(eventData:Event)
   {
    this.backgroundColor=this.defaultColor
   }

}
