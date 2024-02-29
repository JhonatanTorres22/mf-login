
export class IniciarSesion {
   constructor(
    public nombreDeUsuario:string,
    public contrasenia: string,
    public rol: string,
   ){}
}

export class DataUser {
    constructor(
        public data: User,
        public isSuccess: boolean,
        public message: string,
    ){
    }
}

export class User {
    constructor(
       public apellidoMaterno: string,
       public apellidoPaterno: string,
       public idPersona: number,
       public menus: MenuAuth[],
       public nombres: string,
       public rol: string,
       public revisoGuia: boolean,
       public mostrarGuia: boolean,
       public contrasenia:string,
    ){}
   
}

export class MenuAuth {
    constructor(
       public idMenu: number,
       public idContenedor: number,
       public tituloMenu: string,
       public urlMenu: string,
       public icono: string,
       public expanded: boolean,
       public tituloSubMenu: string,
       public  urlSubmenu: string,
       public subMenus: SubMenuAuth[]
    ){}
    
  }

  export class SubMenuAuth {
    constructor(
       public tituloSubMenu: string,
       public urlSubmenu: string,
       public icono: string,
       public expanded?: boolean,
    ){}
  }