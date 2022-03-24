import { Directive,ElementRef,Input,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appAppAlert]'
})
export class AppAlertDirective {

  @Input('error')details!:string;
  @Input('sub')sub!:string;
  @HostBinding('title') title!:string;
  @HostBinding('id') id!:string;

  constructor(public elementRef:ElementRef) {
   
   }

   ngOnInit(){
    this.elementRef.nativeElement.innerHTML=`<div>Hello world ${this.details} ${this.sub}</div>`; //  - 
    this.title="hello directive";
    this.id="2";
   }

   @HostListener("click", [ "$event" ])
   onMouse(event:any)
   {
    this.elementRef.nativeElement.innerHTML=`<div>Hello world mouse enter</div>`;
   }

   @HostListener("mouseleave", [ "$event" ])
   onChange(event:any)
   {
    this.elementRef.nativeElement.innerHTML=`<div>Hello world mouse leave</div>`;
   }

}