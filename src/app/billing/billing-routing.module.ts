import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BillingPageComponent} from "./pages/billing-page/billing-page.component";

const routes: Routes = [
    {path: 'billing', component: BillingPageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BillingRoutingModule {
}
