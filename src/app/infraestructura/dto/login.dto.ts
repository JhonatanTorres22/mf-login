
export interface IniciarSesionDTO {
    nombreDeUsuario:string
    contrasenia: string
    rol: string
}

export interface DataUserDTO {
    data: UserDTO,
    isSuccess: boolean,
    message: string,
}

export interface UserDTO {
    apellidoMaterno: string,
    apellidoPaterno: string,
    idPersona: number,
    menus: MenuAuthDTO[],
    nombres: string,
    rol: string,
    revisoGuia?: boolean,
    mostrarGuia?: boolean,
    contrasenia:string
}

export interface MenuAuthDTO {
    idMenu?: number,
    idContenedor?: number,
    tituloMenu: string,
    urlMenu: string,
    icono: string,
    expanded?: boolean,
    tituloSubMenu?: string,
    urlSubmenu?: string,
    subMenus: MenuAuthDTO[]
  }

  export interface SubMenuAuthDTO {
    // idSubMenu: number
    // idMenu: number
    tituloSubMenu: string,
    urlSubmenu: string,
    icono: string,
    expanded?: boolean,
  }