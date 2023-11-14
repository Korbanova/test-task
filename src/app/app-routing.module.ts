import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "../shared/layout/layout.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', loadChildren: () => import('app/home/home.module').then(m => m.HomeModule)},
            {path: '', loadChildren: () => import('app/auth/auth.module').then(m => m.AuthModule)},
            {path: '**', redirectTo: '', pathMatch: 'full'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
