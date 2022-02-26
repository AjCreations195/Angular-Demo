import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountsService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers:[LoggingService ]
})
export class AccountComponent implements OnInit {

  // @Output() setTheStatus = new EventEmitter<{id:number,newStatus:string}>()
  @Input() singleAccount
  @Input() id:number;
  constructor(private loggingService:LoggingService,
    private accountService:AccountsService
    ) {
     }

  ngOnInit(): void {
  }

  setTo(status:string){
this.accountService.updateStatus(this.id,status)
   this.accountService.statusUpdated.emit(status);
} 

}
