import { Component, NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerAndBlueprintComponent } from './server-and-blueprint/server-and-blueprint.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from "./services/auth-guard.service";
import { canDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { MainComponent } from "./main/main.component";
import { SingleUserComponent } from "./single-user/single-user.component";
import { FormDemoComponent } from "./form-demo/form-demo.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ReactiveAsmntComponent } from "./reactive-asmnt/reactive-asmnt.component";
import { PipesComponent } from "./pipes/pipes.component";
import { FirebaseFormComponent } from "./firebase-form/firebase-form.component";
import { AnimationComponent } from "./animation/animation.component";
import { PostComponent } from "./post/post.component";
import { TestDemoComponent } from "./test-demo/test-demo.component";
import { AlertComponent } from "./alert/alert.component";

const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  {path:'main',component:MainComponent},
  {path:'singleUser/:id',component:SingleUserComponent},
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard], component: ServersComponent, children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [canDeactivateGuard] },
    ]
  },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },

  { path: 'appActive', component: ActiveUsersComponent },
   { path: 'pipe', component: PipesComponent },
  { path: 'appInactive', component: InactiveUsersComponent },
  { path: 'serverAndBlueprint', component: ServerAndBlueprintComponent },
  {path:'form', component:FormDemoComponent},
  {path:'reactive-form', component:ReactiveFormComponent,children:[
    {path:'asigment',component:ReactiveAsmntComponent}
  ]},
  {path:'firebase-form',component:FirebaseFormComponent},
  {path:'animation',component:AnimationComponent},
  {path:'post',component:PostComponent},
  {path:'test', component:TestDemoComponent},
{path:'elements', component:AlertComponent},
  // {path:'not-found', component:PageNotFoundComponent},
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' },
]
@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes,{useHash:true})
    RouterModule.forRoot(appRoutes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
