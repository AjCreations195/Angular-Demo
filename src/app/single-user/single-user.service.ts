import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class SingleUserServcie{
clickActivate = new Subject<boolean>()
}