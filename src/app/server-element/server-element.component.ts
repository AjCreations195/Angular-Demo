import { Component, Input, OnInit, 
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,OnChanges, AfterContentInit,
   AfterContentChecked,
   AfterViewChecked,
   AfterViewInit,OnDestroy,
    ViewChild, ElementRef,
   ContentChild
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,
OnChanges,DoCheck,OnDestroy,AfterViewChecked,AfterViewInit,
AfterContentInit, AfterContentChecked{

 @Input('srvElement') element:{ type:string,name:string,content:string};
 @Input() name:string;
@ViewChild('heading') header:ElementRef;
@ContentChild('contentParagraph') paragraph:ElementRef

  constructor() {
    console.log("constructor called");
   }
  
  ngOnChanges(changes:SimpleChanges){
     console.log("ngOnChanges claled");
     console.log(changes); 
  }
  ngOnInit(): void {
    console.log("ngOnInit Called"); 
    
  }
  ngDoCheck(){
console.log("ngDoCkeck called");
  }

  ngAfterContentInit(): void {
    console.log("ngafercontentinit is called");
    console.log("content of paragraph:" , this.paragraph.nativeElement.textContent );
}
  ngAfterContentChecked(): void {
    console.log(" ngAfterContentChecked called");
  }
  ngAfterViewChecked(): void {
    console.log('gAfterViewChecked called.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log("text",this.header.nativeElement.textContent);
    console.log("content of paragraph:" , this.paragraph.nativeElement.textContent );
   
  }
  ngOnDestroy(): void {

    console.log('ng destroy called');
  }

  
}
