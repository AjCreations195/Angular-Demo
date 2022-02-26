import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:Post[]=[]
  // @Input() title:string;
  // @Input()  content:string;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
      this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts') 
      .subscribe(fetchedPosts =>{
        this.posts = fetchedPosts;
      });  
  }

}
