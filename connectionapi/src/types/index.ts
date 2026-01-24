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


