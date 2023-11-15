import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { SharedModule } from 'shared'
import { HomePageComponent } from './pages/home-page.component';
import {HomeRoutingModule} from "./home-routing.module";


@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        HomeRoutingModule,
        CommonModule
    ],
    declarations: [
        HomePageComponent
    ]
})
export class HomeModule { }
