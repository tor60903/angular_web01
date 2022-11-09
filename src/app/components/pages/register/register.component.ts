import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  //atributos
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
  constructor(
    private httpClient: HttpClient //injeção de dependência
  ) { }
 
  //criando a estrutura do formulário
  formRegister = new FormGroup({
    //campo 'nome'
    nome: new FormControl('',
      [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
    //campo 'email'
    email: new FormControl('',
      [Validators.required, Validators.email]),
    //campo 'senha'
    senha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    //campo 'senhaConfirmacao'
    senhaConfirmacao: new FormControl('',
      [Validators.required])
  });
 
  //função para acessar na página os campos do formulario
  //e exibir as mensagens de erro de validação
  get form(): any {
    return this.formRegister.controls;
  }
 
  ngOnInit(): void {
  }
 
  //função para realizar a chamada para a API
  onSubmit(): void {
 
    //limpar os valores dos atributos
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
 
    //fazendo uma requisição POST para a API
    this.httpClient.post(
      environment.API_USUARIOS_URL + "/api/register", //Endpoint da API
      this.formRegister.value, //Campos do formulário
      { responseType: 'text' } //Capturar a resposta da API
    )
      .subscribe({
        next: (data) => { //capturar o retorno de sucesso da API
          this.mensagem_sucesso = data;
          this.formRegister.reset(); //limpar o formulário
        },
        error: (e) => { //capturar o retorno de erro da API
          this.mensagem_erro = e.error;
        }
      })
 
  }
 
}
 
 

