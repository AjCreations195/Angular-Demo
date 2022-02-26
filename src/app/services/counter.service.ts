import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
  constructor() { }

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log("activeToInactive: ",this.activeToInactiveCounter);
    
  }
  incrementInactiveToActive(){
    this.inactiveToActiveCounter++;
    console.log("inactiveToActive: ",this.inactiveToActiveCounter);
  }
}
