import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
 @Output() userSetToActive=new EventEmitter<number>()
  @Input() users=[]
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.users=this.userService.inactiveUsers
  }
  setToActive(id:number){
    this.userService.InactiveToActive(id)
  }
  

}
