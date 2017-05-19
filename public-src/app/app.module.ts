import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule, MdInputModule, MdButtonModule, MdIconModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { LocalStorageModule } from 'angular-2-local-storage'
import { HttpModule } from '@angular/http'
import { CommonModule} from '@angular/common'

import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component'
import { DataService } from './_common/data/data.service'
import { AuthenticationService, CanActivateAuthGuard } from './_common/security'

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpModule,
        CommonModule,
        FlexLayoutModule,
        MaterialModule.forRoot(),
        MdInputModule, MdButtonModule, MdIconModule,
        LocalStorageModule.withConfig({
            prefix: 'deliv',
            storageType: 'localStorage'
        }),

        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        DataService,
        AuthenticationService,
        CanActivateAuthGuard
    ]
})
export class MainModule { }
