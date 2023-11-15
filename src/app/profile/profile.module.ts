import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {ReactiveFormsModule} from "@angular/forms";


import { NgxMaskModule} from 'ngx-mask';

@NgModule({
    declarations: [
        ProfilePageComponent
    ],
    imports: [
        CommonModule,
        NgxMaskModule.forRoot({
            showMaskTyped : true,
            // clearIfNotMatch : true
        }),
        ProfileRoutingModule,
        ReactiveFormsModule,
    ]
})
export class ProfileModule {
}
