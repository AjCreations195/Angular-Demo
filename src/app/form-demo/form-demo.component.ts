import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {
  [x: string]: any;

  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  submitted=false;
  user = {
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  // onSubmit(form :NgForm){
  //   console.log(form);
  // }
  onSubmit() {
    this.submitted = true;
    console.log(this.signUpForm);
    this.user.username = this.signUpForm.value.userData.username
    this.user.email = this.signUpForm.value.userData.email
    this.user.secretQuestion = this.signUpForm.value.secret
    this.user.answer = this.signUpForm.value.questionAnswer
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
  reset(){
    this.signUpForm.reset();
  }
  suggestUserName() {
    const suggestedName = 'Superuser'
    //     this.signUpForm.setValue({
    //       userData:{
    //         username:suggestedName,
    //         email:''
    //       },
    //       secret:'pet',
    //       questionAnswer :'',
    //       gender:'male'
    //     })
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

}
