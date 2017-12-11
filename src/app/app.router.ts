import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { PostFullViewComponent } from './post-full-view/post-full-view.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './login/auth.guard';
import { AllusersComponent } from './allusers/allusers.component';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'dashboard', component: LayoutComponent,  canActivate: [AuthGuard],
        children: [
            { path: '', component: AboutComponent },
            { path: 'adduser', component: AdduserComponent },
            { path: 'alluser', component: AllusersComponent },
            { path: 'addpost', component: AddpostComponent },
            { path: 'about', component: AboutComponent },
            { path: 'postlist', component: PostlistComponent },
            { path: 'basicforms', component: BasicFormsComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'reactiveforms', component: ReactiveFormsComponent },
            { path: 'updatepost/:id', component: UpdatepostComponent },
            { path: 'postdetail/:id', component: PostFullViewComponent }
        ]
    },
    { path: '**', component: Page404Component,  canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouterModule {
}
