import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { EntregasComponent } from './pages/entregas/entregas.component';
import { EntregadoresComponent } from './pages/entregadores/entregadores.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { RastreamentoComponent } from './pages/rastreamento/rastreamento.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'entregas', component: EntregasComponent },
  { path: 'entregadores', component: EntregadoresComponent },
  { path: 'rastreamento', component: RastreamentoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
