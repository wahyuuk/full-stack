import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guard/auth.guard';
import { WrapperComponent } from './wrapper/wrapper.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: '',
    component: WrapperComponent,
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: 'dashboard',
        loadChildren: ()=> import('../dashborad/dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'test',
        loadChildren: ()=> import('../test/test.module').then(mod => mod.TestModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}