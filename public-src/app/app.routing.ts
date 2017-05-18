import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'

const routes: Routes = [
    { path: '', redirectTo: 'semester', pathMatch: 'full' },
    { path: 'register', component: HomeComponent },
    { path: 'login', loadChildren: './+login/login.module#LoginModule' },
    { path: 'semester', loadChildren: './+semester/semester.module#SemesterModule'},
    { path: 'course', loadChildren: './+course/course.module#CourseModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
