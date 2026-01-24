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