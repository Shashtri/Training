import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterModule } from './app.router';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './dashboardlayout/dashboardlayout.component';
import { PostlistComponent } from './postlist/postlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { DataService } from './data.service';
import { Page404Component } from './page404/page404.component';
import { BasicFormsComponent } from './basic-forms/basic-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AddpostComponent } from './addpost/addpost.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';
import { LimitcontentPipe } from './limitcontent.pipe';
import { PostFullViewComponent } from './post-full-view/post-full-view.component';
import { ProfileComponent } from './profile/profile.component';
import { CommentServiceService } from './postlist/comment-service.service';
import { LoginService } from './login/login.service';
import { AuthGuard } from './login/auth.guard';
import { AllusersComponent } from './allusers/allusers.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    LayoutComponent,
    PostlistComponent,
    AdduserComponent,
    Page404Component,
    BasicFormsComponent,
    ReactiveFormsComponent,
    AddpostComponent,
    UpdatepostComponent,
    LimitcontentPipe,
    PostFullViewComponent,
    ProfileComponent,
    AllusersComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    CommentServiceService,
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
