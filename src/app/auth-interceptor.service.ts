import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{

    intercept(req:HttpRequest<any>,next:HttpHandler) {
         console.log("Request is on its way");
         const modifiedRequest = req.clone(
             {headers :req.headers.append('Auth','xyz')})
            return next.handle(modifiedRequest)
            .pipe(tap(event=>{
 if(event.type === HttpEventType.Response){
                        
                        
                }
            }))
                   
    }

}