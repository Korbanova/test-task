import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileService } from './services';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ProfileService
    ],
    declarations: []
})
export class SharedModule { }
