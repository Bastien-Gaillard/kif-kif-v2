import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './components/profil.component';
import { GetUserInformationResolver } from './resolvers/getUserInformation.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProfilComponent,
    resolve: {
      user: GetUserInformationResolver
    }

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilPageRoutingModule {}
