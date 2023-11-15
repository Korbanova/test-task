import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from 'core/core.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from "../shared/layout/layout.component";
import {HeaderComponent} from "../shared/layout/header/header.component";
import {RouterModule} from "@angular/router";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainComponent} from "./main/main.component";

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        AppRoutingModule,
        MatSnackBarModule,
        CoreModule,
        BrowserAnimationsModule
    ],
    providers: [
        // {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
