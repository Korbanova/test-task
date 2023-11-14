import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from 'core/core.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from "../shared/layout/layout.component";
import {HeaderComponent} from "../shared/layout/header/header.component";
import {RouterModule} from "@angular/router";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent
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
