import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { PasswordComponent } from './components/pages/password/password.component';
import { CadastrarEmpresasComponent } from './components/pages/cadastrar-empresas/cadastrar-empresas.component';
import { ConsultarEmpresasComponent } from './components/pages/consultar-empresas/consultar-empresas.component';
 
//mapeamento das rotas de navegação para os componentes
const routes: Routes = [
  { path: 'acessar-conta', component: LoginComponent },
  { path: 'criar-conta', component: RegisterComponent },
  { path: 'recuperar-senha', component: PasswordComponent },
  { path: 'cadastrar-empresas', component: CadastrarEmpresasComponent },
  { path: 'consultar-empresas', component: ConsultarEmpresasComponent },
  { path: '', pathMatch: 'full', redirectTo: 'acessar-conta' }
];
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    CadastrarEmpresasComponent,
    ConsultarEmpresasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) //registrando as rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 


