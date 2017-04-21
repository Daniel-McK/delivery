import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MaterialModule, MdInputModule } from '@angular/material'

import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component'
import { HomeModule } from './home/home.module'

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule.forRoot(),
        MdInputModule,

        AppRoutingModule,
        HomeModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
    ]
})
export class MainModule { }
