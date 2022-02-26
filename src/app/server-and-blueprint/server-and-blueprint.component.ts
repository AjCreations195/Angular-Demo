import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-and-blueprint',
  templateUrl: './server-and-blueprint.component.html',
  styleUrls: ['./server-and-blueprint.component.css']
})
export class ServerAndBlueprintComponent implements OnInit {

  serverElements=[{type:'server',name:'test',content:'testserverr here'},
  {type:'blueprint',name:'demo',content:'demoserver'}]
  
  constructor() { }

  ngOnInit(): void {
  }

  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push(
     { name:serverData.serverName,
      content:serverData.serverContent,
      type:'server'})
  }
  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}){
   this.serverElements.push({
    type:'blueprint',
    name:blueprintData.serverName,
    content:blueprintData.serverContent
   })
  }
  onChangeFirst(){
    this.serverElements[0].name='Changed!';
  }

  onDesroyFirst(){
    this.serverElements.splice(0,1);
  }

}
