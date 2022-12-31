import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutehnticationGuard } from "./autehntication.guard";

const routes: Routes = [
{
  path: 'unicorns',
  loadChildren: () => import('./entities/unicorns/unicorns.module').then(m=> m.UnicornsModule),
  canActivate:[AutehnticationGuard]
},
{
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then(m=> m.LoginModule)
},
{
  path: '',
  redirectTo: 'welcome',
  pathMatch: 'full'
},
{
  path: 'welcome',
  loadChildren: () => import('./pages/welcome/welcome.module').then(m=> m.WelcomeModule),
  canActivate:[AutehnticationGuard]
},

{
  path: '**',
  redirectTo: 'welcome'
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled'
})
  ],
exports: [RouterModule]
})
  export class AppRoutingModule {}
