import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BillingComponent } from './components/billing/billing.component';
import { AuthGuard } from './auth.guard';
import { InventoryComponent } from './components/inventory/inventory.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: '', redirectTo: '/billing', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/billing' } // Fallback route for invalid paths

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
