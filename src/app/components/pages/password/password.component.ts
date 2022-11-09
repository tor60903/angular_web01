import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
 
  //atributos
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
  constructor(
    private httpClient: HttpClient
  ) { }
 
  ngOnInit(): void {
  }
 
  //criando a estrutura do formulário
  formPassword = new FormGroup({
    //campo 'email'
    email: new FormControl('',
      [Validators.required, Validators.email]),
  });
 
  //função para acessar na página os campos do formulario
  //e exibir as mensagens de erro de validação
  get form(): any {
    return this.formPassword.controls;
  }
 
  onSubmit(): void {
 
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
 
    this.httpClient.post(
      environment.API_USUARIOS_URL + "/api/password",
      this.formPassword.value,
      { responseType: 'text' }
    )
      .subscribe({
        next: (data) => {
          this.mensagem_sucesso = data;
          this.formPassword.reset();
        },
        error: (e) => {
          this.mensagem_erro = e.error;
        }
      })
 
  }
 
}
 
 

