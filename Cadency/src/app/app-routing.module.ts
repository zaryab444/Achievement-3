import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from '@feature/features.component';
import { AppConstants } from './app-constant';

const MODULES = AppConstants.SCREEN_MODULE_ID;
const routes: Routes = [
  {
    path:"",
    component:FeaturesComponent,
    children:[
      {
        path:"dashboard",
        loadChildren: () =>
        import("@feature/dashboard/dashboard.module").then(
          (m) => m.DashboardModule
        ),
        data: { breadcrumb: 'DASHBOARD', moduleId: MODULES.DASHBOARD }
      },
      {
        path:"",
        redirectTo:"dashboard",
        pathMatch: "full"
      },
      {
        path:"customer",
        loadChildren:()=>
        import('@feature/customer/customer.module').then(m => m.CustomerModule),
        data: { breadcrumb: 'CUSTOMER', moduleId: MODULES.CUSTOMER }
      },
      {
        path:"user",
        loadChildren:()=>
        import('@feature/user/user.module').then(m => m.UserModule),
        data: { breadcrumb: 'USER', moduleId: MODULES.USER }
      },
    ],
    
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
