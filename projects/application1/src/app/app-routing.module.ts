
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home/home.component';


const appRoutes=[
    {
      path:'',
      component: HomeComponent
    },
    {
      path:'customers',
      loadChildren:'../app/customers/customers.module#CustomersModule'
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
  ]


  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule {}