import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { TestService } from './test.service';

@Component({
  selector: 'app-test-demo',
  templateUrl: './test-demo.component.html',
  styleUrls: ['./test-demo.component.css'],
  providers:[TestService,DataService]
})
export class TestDemoComponent implements OnInit {

  user:{name:string};
  isLoggedIn:boolean = false;
  data:string;
  constructor(private testService:TestService,
    private dataService:DataService) { }

  ngOnInit(): void {
    this.user = this.testService.user;
    this.dataService.getDetails().then(
      (data:string) =>{
      this.data = data
    })
  }

}
