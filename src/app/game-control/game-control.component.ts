import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 @Output() intervalFired = new EventEmitter<number>();
  interval;
  incNumber=0;
  constructor() { }

  onlyOddnumbers=false;
  numbers=[1,2,3,4,5];
  oddNum=[1,3,5]
  evenNum=[2,4]
  value=10;
  ngOnInit(): void {
  }
  onStart(){
    this.interval=setInterval(()=>{
     this.intervalFired.emit(this.incNumber+1);
     this.incNumber++;
    },1000);
  }
  onPause(){
    clearInterval(this.interval)
  }

}
