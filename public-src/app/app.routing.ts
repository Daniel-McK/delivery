import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CanActivateAuthGuard } from './_core/security'

const routes: Routes = [
    { path: '', redirectTo: '/semester', pathMatch: 'full' },
    { path: 'register', loadChildren: './+register/register.module#RegisterModule' },
    { path: 'login', loadChildren: './+login/login.module#LoginModule' },
    { path: 'semester', loadChildren: './+semester/semester.module#SemesterModule', canActivate: [CanActivateAuthGuard] },
    { path: 'course', loadChildren: './+course/course.module#CourseModule', canActivate: [CanActivateAuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
