import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth.component';
import { AuthResolver } from './resolvers/login.resolver';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    resolve: { auth: AuthResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPageRoutingModule {}
