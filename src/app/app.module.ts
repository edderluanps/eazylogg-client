import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';

import { EntregasComponent } from './pages/entregas/entregas.component';
import { EntregadoresComponent } from './pages/entregadores/entregadores.component';
import { RastreamentoComponent } from './pages/rastreamento/rastreamento.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ErrorPageComponent } from './pages/homepage/error-page/error-page.component';
import { EntregadoresPageComponent } from './pages/entregadores/entregadores-page/entregadores-page.component';
import { EntregasPageComponent } from './pages/entregas/entregas-page/entregas-page.component';
import { FormEntregaComponent } from './pages/entregas/form-entrega/form-entrega.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EntregasComponent,
    EntregadoresComponent,
    RastreamentoComponent,
    SobreComponent,
    LoginComponent,
    SignupComponent,
    ErrorPageComponent,
    EntregadoresPageComponent,
    EntregasPageComponent,
    FormEntregaComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSelectModule,
    MatPaginatorModule,
    MatStepperModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
