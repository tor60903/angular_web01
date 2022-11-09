import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-consultar-empresas',
  templateUrl: './consultar-empresas.component.html',
  styleUrls: ['./consultar-empresas.component.css']
})
export class ConsultarEmpresasComponent implements OnInit {
 
  //atributo
  empresas: any[] = [];
 
  constructor(
    private httpClient: HttpClient
  ) { }
 
  //método executado quando a página é aberta
  ngOnInit(): void {
 
    //capturando o TOKEN gravado na localstorage
    var httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
    });
 
    //consultando as empresas na API
    this.httpClient.get(environment.API_EMPRESAS_URL + "/api/empresas", { headers: httpHeaders })
      .subscribe({
        next: (data) => { //capturando a resposta de sucesso
          this.empresas = data as any[];
        },
        error: (e) => { //capturando a resposta de erro
          console.log(e);
        }
      });
  }
 
}
 


