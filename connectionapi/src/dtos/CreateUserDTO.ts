import type { IUserAdressJPH, IUserCompanyJPH } from "../models/User"

export interface CreateUserDTO {
  name: string
  email: string
  username?: string
  phone?: string
  website?: string
  address?: IUserAdressJPH
  company?: IUserCompanyJPH
}