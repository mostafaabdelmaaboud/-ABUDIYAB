import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
const childRoutes = [
  { path: "", loadChildren: () => import("./components/home/home.module").then(x => x.HomeModule) },

]
const routes: Routes = [
  { path: "", component: LayoutComponent, children: childRoutes }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
