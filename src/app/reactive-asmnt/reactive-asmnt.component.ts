import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../custome-validators';

@Component({
  selector: 'app-reactive-asmnt',
  templateUrl: './reactive-asmnt.component.html',
  styleUrls: ['./reactive-asmnt.component.css']
})
export class ReactiveAsmntComponent implements OnInit {

  projectForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName':new FormControl(null,
        [Validators.required, CustomValidator.invalidProjectName ],
        CustomValidator.asyncInvalidProjectName),
      'mail':new FormControl(null,[Validators.required,Validators.email]),
      'projectStatus':new FormControl('Critical'),
      
    })
  }
  onSubmit(){
    console.log(this.projectForm.value);
    
  }

 }
