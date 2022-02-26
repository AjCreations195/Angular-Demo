import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import {Post} from './post.model'

@Component({
  selector: 'app-firebase-form',
  templateUrl: './firebase-form.component.html',
  styleUrls: ['./firebase-form.component.css']
})
export class FirebaseFormComponent implements OnInit,OnDestroy {

  submitted= false;
  isFetching =false;
  error = null ;
  private errorSub:Subscription;
  loadedPost:Post[] = []

  constructor( private http :HttpClient,
    private postsService:PostsService) { }

  ngOnInit(): void {
    this.errorSub = this.postsService.error.subscribe(errorMessage=>{
      this.error = errorMessage
    })
    this.isFetching = true;
    this.postsService.fetchPost().subscribe(
      {
        next:  (posts) =>{
          this.isFetching = false;
              this.loadedPost = posts
           },
       error: error =>{
       this.isFetching =false;
         this.error = error.statusText
        console.log(error);
       }
      }
    )
  }
  onSubmit(postData:Post){
      this.postsService.createAndStorePost(postData.title,postData.content)
  }
  onFetchPost(){
    this.isFetching = true;
    this.postsService.fetchPost().subscribe(
      {
        next:  (posts) =>{
          this.isFetching = false;
              this.loadedPost = posts
           },
       error: error =>{
         this.isFetching =false;
         this.error = error.statusText
        console.log(error);
       }
      }
    )
  }
  onClearPosts(){
    this.postsService.deleteAllPosts().subscribe(
     ()=>{
        this.loadedPost = [];
        
      }
    )
  }
  onHandleError(){
    this.error = null;
  }
  ngOnDestroy(): void {
      this.errorSub.unsubscribe()
  }
}
