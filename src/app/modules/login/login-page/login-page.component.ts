import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataUser, IniciarSesion } from 'src/app/core/models/login.model';
import { LoginService } from 'src/app/infraestructura/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  formIniciarSesion!: FormGroup
  constructor( 
    private router:Router,
    private loginService:LoginService,
    private formBuilder:FormBuilder
    ){

      this.formIniciarSesion = formBuilder.group({
        nombreDeUsuario:[''],
        contrasenia: [''],
        rol:['']
      })
    }

  ngOnInit(): void {
    
  }

  iniciarSesion(iniciarSesion: IniciarSesion){
    console.log(iniciarSesion);
    
    this.loginService.iniciarSesion(iniciarSesion).subscribe({
      next: (data:DataUser) => {
        Swal.fire({
          icon:'success',
          title: '¡BIENVENIDO!',
          text: 'AUTENTICACIÓN EXITOSA'
        })
        console.log(data);
        this.router.navigate(['mf-navbar'])

        
      }, error: (e) => {
        Swal.fire({
          icon:'error',
          title: 'OCURRIÓ UN ERROR',
          text: 'USUARIO O CONTRASEÑA INCORRECTO, VUELVA A INTENTARLO POR FAVOR'
        })
        console.error('error', e);
        
      }
    })
  }


}
