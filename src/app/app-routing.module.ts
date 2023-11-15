import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "../shared/layout/layout.component";
import {AuthForwardGuard} from "../core/guard/auth-forward.guard";
import {MainComponent} from "./main/main.component";
import {AuthGuard} from "../core/guard/auth.guard";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', component: MainComponent},
            {path: '', loadChildren: () => import('app/home/home.module').then(m => m.HomeModule)},
            {path: '', loadChildren: () => import('app/auth/auth.module').then(m => m.AuthModule), canActivate: [AuthForwardGuard]},
            {path: '', loadChildren: () => import('app/inventory/inventory.module').then(m => m.InventoryModule)},
            {path: '', loadChildren: () => import('app/reports/reports.module').then(m => m.ReportsModule)},
            {path: '', loadChildren: () => import('app/billing/billing.module').then(m => m.BillingModule)},
            {path: '', loadChildren: () => import('app/profile/profile.module').then(m => m.ProfileModule),  canActivate:[AuthGuard]},
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
