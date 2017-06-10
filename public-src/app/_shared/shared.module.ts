import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

import { SettingsButtonComponent } from './settings-button/settings-button.component'

@NgModule({
    imports: [
        MaterialModule,
        FlexLayoutModule,
        CommonModule
    ],
    exports: [
        SettingsButtonComponent
    ],
    declarations: [
        SettingsButtonComponent
    ],
    entryComponents: [],
    providers: []
})
export class SharedModule { }