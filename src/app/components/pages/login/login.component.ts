import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
  constructor(
    private httpClient: HttpClient
  ) { }
 
  //criando a estrutura do formulário
  formLogin = new FormGroup({
    //campo 'email'
    email: new FormControl('',
      [Validators.required, Validators.email]),
    //campo 'senha'
    senha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });
 
  //função para acessar na página os campos do formulario
  //e exibir as mensagens de erro de validação
  get form(): any {
    return this.formLogin.controls;
  }
 
  ngOnInit(): void {
  }
 
  onSubmit(): void {
 
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
 
    this.httpClient.post(
      environment.API_USUARIOS_URL + "/api/login",
      this.formLogin.value,
      { responseType: 'text' }
    )
      .subscribe({
        next: (data) => {          
          this.formLogin.reset();          
          localStorage.setItem('ACCESS_TOKEN', data); //salvar o TOKEN na local storage
          window.location.href = '/consultar-empresas';
        },
        error: (e) => {
          this.mensagem_erro = e.error;
        }
      })
 
  }
 
}
 
 

