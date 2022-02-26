import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, observable, Observer, Subscription } from 'rxjs';
import {filter, map} from 'rxjs/operators'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit ,OnDestroy {

  private firstObsSubscription :Subscription
 
  constructor() { }

  ngOnInit(): void {
  //  this.firstObsSubscription = interval(1000).subscribe(
  //     count =>{
  //       console.log(count);
  //     }
  //   )
   const customIntervalObservable = new Observable(observer =>{
     let count = 0;
     setInterval(()=>{
       observer.next(count)
       if(count==7){
         observer.complete()
       }
       if(count>5){
         observer.error(new Error('Count is greater than 2'))
       }
       count++;
     },1000)
   })

   customIntervalObservable.pipe(filter(data=>{
        return data >=3
   }))
   customIntervalObservable.pipe(map((data:number) =>{
    return 'Round: '+ (data+1)
   }))

  this.firstObsSubscription = customIntervalObservable.pipe(map((data:number) =>{
    return 'round: '+ (data+1)
   })
   ).subscribe({
    next:  (data) =>{
         console.log(data);
       },
   error: error =>{
     console.log(error.message);
     alert(error.message)
   },
   complete: ()=>{
     console.log('completed');
     
   }
  }
   )

  }
  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe()
  }

}
