import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef:ElementRef){}
   
  ngOnInit(): void {
      this.elementRef.nativeElement.style.backgroundColor ='red';
      this.elementRef.nativeElement.style.marginTop ='80px';
        }
 
}