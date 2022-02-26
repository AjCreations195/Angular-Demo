import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Subject, tap, throwError } from "rxjs";
import { Post } from "../firebase-form/post.model";

@Injectable({
    providedIn:'root'
})
export class PostsService{

    error = new Subject<string>()
    constructor(private http:HttpClient){

    }
    createAndStorePost(title:string,content:string){
    const postData:Post ={title:title,content:content}
        this.http.post<{name:string}>(
            'https://ng-complete-guide-37adb-default-rtdb.firebaseio.com/posts.json',
          postData,
          {
              observe:'response'
          }).subscribe(
              {next: (responseData)=>{
                  console.log(responseData);
            },
            error:(error)=>{
                    this.error.next(error.message)
            }})
    }
    fetchPost(){
        let searchParams = new HttpParams()
        searchParams =  searchParams.append('print','pretty')
        searchParams =searchParams.append('custom','key')
      return  this.http.get<{[key:string]: Post }>
        ('https://ng-complete-guide-37adb-default-rtdb.firebaseio.com/posts.json',
        {
            headers: new HttpHeaders({'Custom-Header':'Hello'}),
            params:searchParams,
            responseType:'json'
        })
        .pipe(map( responseData =>{
          const postsArray: Post[] =[];
          for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
              postsArray.push({...responseData[key], id: key})
            }
             
          }
          return postsArray;
  
        })
        // ,
        // catchError(errorRes =>{
        //     return errorRes;
            
        // })
        ) 
    }

    deleteAllPosts(){
       return this.http.delete
       ('https://ng-complete-guide-37adb-default-rtdb.firebaseio.com/posts.json',
            {
              observe:'events',
              responseType:'text'
            }
       ).pipe(tap(event=>{
          console.log(event);  
          if(event.type === HttpEventType.Sent){
            console.log("request was sent");
            
          }  
          if(event.type === HttpEventType.Response){
                console.log(event.body);
                
                } 

       }))
    }
}