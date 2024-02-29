import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataUser, IniciarSesion } from 'src/app/core/models/login.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlEnviro:string;
  private urlIniciarSesion:string

  constructor(private httpClient: HttpClient ) { 
    this.urlEnviro = environment.EndPoint ;
    this.urlIniciarSesion =  'api/Persona/Autenticar';
  }

  iniciarSesion(iniciarSesion:IniciarSesion):Observable<DataUser>{
    return this.httpClient.post<DataUser>(this.urlEnviro + this.urlIniciarSesion, iniciarSesion)
  }




}
