import { Observable } from "rxjs";
import { DataUser, IniciarSesion } from "../models/login.model";

export abstract class LoginRepository {
    abstract iniciarSesion(login:IniciarSesion): Observable<DataUser>
}