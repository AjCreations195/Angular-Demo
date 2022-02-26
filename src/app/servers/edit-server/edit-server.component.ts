import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, retry } from 'rxjs';
import { ServerService } from '../server.service';
import { canComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, canComponentDeactivate {
server:{id:number,name:string,status:string}
serverName:string;
serverStatus:string;
allowEdit=false;
changesSaved=false

  constructor(
    private serverService:ServerService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']
    console.log("queryparams: ",this.route.snapshot.queryParams);
    console.log("fragments : ",this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
        (queryParams:Params)=>{
          this.allowEdit =queryParams['allowEdit']=== '1'? true : false 
        }
    );
    this.route.fragment.subscribe();

    this.server = this.serverService.getServer(id)
    this.route.params.subscribe(
      (params:Params)=>{
        this.server = this.serverService.getServer(+params['id'])
      }
    )
    this.serverName = this.server.name
   this.serverStatus = this.server.status
 }
  onUpdateStatus(){
    this.serverService
    .updateServer(this.server.id,
      {name:this.serverName,status:this.serverStatus});
      this.changesSaved=true;
      this.router.navigate(['../'],{relativeTo:this.route})
  }
 canDeactivate(): Observable<boolean> | Promise<boolean> |  boolean {
  if(!this.allowEdit){
    return true
  }if((this.serverName !== this.server.name 
    || this.serverStatus !== this.server.status)&&
    !this.changesSaved){
      return confirm('Do you want to discard the changes?')
    }else{
      return true;
    }
 
 }
}
