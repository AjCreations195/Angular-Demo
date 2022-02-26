import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountsService } from './services/account.service';
import { LoggingService } from './services/logging.service';
import { SingleUserServcie } from './single-user/single-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private activatedSub :Subscription;
  OddNumbers:number[]=[]
  EvenNumbers:number[]=[]
  value=100;
  userActivated=false;
  title="app-works!"


  onIntervalFired(firedNumber:number){
    if(firedNumber%2 === 0){
     this.EvenNumbers.push(firedNumber)
   }
   else{
     this.OddNumbers.push(firedNumber)
     
   }

  }
  accounts:{name:string,status:string}[]=[];

  constructor(
    private accountsService:AccountsService,
    private singleUserService:SingleUserServcie
  ){}
  ngOnInit(): void {
      this.accounts= this.accountsService.accounts;
     this.activatedSub = this.singleUserService.clickActivate.subscribe(
        didActivate =>{
          this.userActivated =didActivate
        }
      )

  }
  ngOnDestroy(): void {
      this.activatedSub.unsubscribe()
  }

   
}
