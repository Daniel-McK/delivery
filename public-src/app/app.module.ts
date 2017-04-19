import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '@angular/material'

import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component'
import { HomeModule } from './home/home.module'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule.forRoot(),

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
