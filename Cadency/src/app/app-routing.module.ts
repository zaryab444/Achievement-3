import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from '@feature/features.component';

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
        )
      },
      {
        path:"",
        redirectTo:"dashboard",
        pathMatch: "full"
      },
      {
        path:"customer",
        loadChildren:()=>
        import('@feature/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path:"user",
        loadChildren:()=>
        import('@feature/user/user.module').then(m => m.UserModule)
      },
    ],
    
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
