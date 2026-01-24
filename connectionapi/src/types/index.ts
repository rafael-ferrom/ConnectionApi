export interface ColumnItemHome {
  id:number
  label:string
}

export interface RownItemHome{
  id:number
  name:string
  hasExternalLib: boolean
  hasAutomaticCache: boolean
  hasLoading: boolean
  goodForBigProjects:boolean
  bigLearningCourve: boolean
}

export interface ListOption{
    id: number
    img: string
    subtitle: string
    route: string
    title:string
}

export interface IUsersJPH{
  id: number
  name: string
  username: string
  adress: IUserAdressJPH
  phone: string
  website: string
  company: IUserCompanyJPH
}

export interface IUserAdressJPH{
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IUserAdressGeoJPH
}

export interface IUserAdressGeoJPH{
  lat: string
  lng: string
}

export interface IUserCompanyJPH{
  name: string
  catchPhrase: string
  bs: string
}
