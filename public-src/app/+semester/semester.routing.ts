import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { SemesterComponent } from './semester.component'

const routes: Routes = [
    { path: '', component: SemesterComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SemseterRoutingModule { }