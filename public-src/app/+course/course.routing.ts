import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CourseComponent } from './course.component'

const routes: Routes = [
    { path: ':courseId', component: CourseComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }