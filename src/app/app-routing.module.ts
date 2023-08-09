import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { EntregasComponent } from './pages/entregas/entregas.component';
import { EntregadoresComponent } from './pages/entregadores/entregadores.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { RastreamentoComponent } from './pages/rastreamento/rastreamento.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ErrorPageComponent } from './pages/homepage/error-page/error-page.component';
import { EntregadoresPageComponent } from './pages/entregadores/entregadores-page/entregadores-page.component';
import { EntregasPageComponent } from './pages/entregas/entregas-page/entregas-page.component';
import { FormEntregaComponent } from './pages/entregas/form-entrega/form-entrega.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ConfirmacaoComponent } from './pages/confirmacao/confirmacao.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'entregas', component: EntregasComponent },
  { path: 'entregas-page', component: EntregasPageComponent },
  { path: 'nova-entrega', component: FormEntregaComponent },
  { path: 'entregadores', component: EntregadoresComponent },
  { path: 'entregadores-page', component: EntregadoresPageComponent },
  { path: 'rastreamento', component: RastreamentoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent },
  { path: 'error', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
