import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileService } from './services'

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ProfileService
    ]
})
export class SharedModule { }
