import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MaterialModule, MdInputModule, MdButtonModule } from '@angular/material'
import { LocalStorageModule } from 'angular-2-local-storage'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component'
import { HomeModule } from './home/home.module'
import { DataService } from './_common/data/data.service'
import { AuthenticationService } from './_common/security'

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        MdInputModule, MdButtonModule,
        LocalStorageModule.withConfig({
            prefix: 'deliv',
            storageType: 'localStorage'
        }),

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
        DataService,
        AuthenticationService
    ]
})
export class MainModule { }
