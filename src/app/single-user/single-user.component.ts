import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SingleUserServcie } from './single-user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  id:number;
  constructor(
    private route:ActivatedRoute,
    private singleUserService:SingleUserServcie
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
          this.id= +params['id']
      }
    )
  //  this.id= +this.route.snapshot.params['id']
  }
  onClickActivate(){
      this.singleUserService.clickActivate.next(true)
  }
}
