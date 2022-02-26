import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers:[LoggingService]
})
export class NewAccountComponent implements OnInit {
// @Output() AccountAdded = new EventEmitter<account>()
  constructor(
    private loggingService:LoggingService,
    private accountService:AccountsService
  ) { 
    this.accountService.statusUpdated.subscribe(
      (status:string)=>{
        alert('New updated Status: ' + status)
      }
    )
  }

  ngOnInit(): void {
  }
  addNewAccount(accountName:string,accountStatus:string){
    this.accountService.addAccount(accountName,accountStatus)
 
    // let newAccount= new account()
    // newAccount.name=accountName;
    // newAccount.status=accountStatus;
    // // this.AccountAdded.emit({
    // //   name:accountName,
    // //   status:accountStatus
    // // })
    // this.AccountAdded.emit(newAccount)
 //  this.loggingService.logStatusChange(accountStatus)
    // alert("account added");

  }
  

}

export class account{
    name:string;
    status:string
  }
