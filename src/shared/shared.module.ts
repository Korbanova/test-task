import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileService } from './services';
import { HeaderComponent } from './layout/header/header.component'

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ProfileService
    ],
    declarations: [
      HeaderComponent
    ]
})
export class SharedModule { }
