import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server:{id:number,name:string,status:string}

  constructor(
    private serverService:ServerService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
      this.route.data.subscribe(
        (data:Data)=>{
          this.server = data['server']
        }
      )
    // const id = +this.route.snapshot.params['id']
    // this.server = this.serverService.getServer(id)
    // this.route.params.subscribe(
    //   (params:Params)=>{
    //     this.server = this.serverService.getServer(+params['id'])
    //   }
    // )
  }
  onEdit(){
     this.router.navigate(['edit'],
     {relativeTo:this.route ,queryParamsHandling:'preserve'})
  }

}
