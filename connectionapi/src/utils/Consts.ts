import type { ColumnItemHome, ListOption, RownItemHome } from "../types";

import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"

export const Options: ListOption[] = [
        {id:1, img:img1, route:"/Fetch", subtitle:"Consumir a API com Javascript puro", title:"Fetch"},
        {id:2, img:img2, route:"/Axios", subtitle:"Lib para ajudar a consumir API", title:"Axios"},
        {id:3, img:img3, route:"/Thunk", subtitle:"Funcionalidade do Redux toolkit", title:"CreateAsyncThunk"},
        {id:4, img:img4, route:"/RTK", subtitle:"Funcionalidade do Redux toolkit", title:"RTK"}
    ]

export const ColumnTable: ColumnItemHome[] = [
    {id:1, label:""},
    {id:2, label:"Biblioteca externa"},
    {id:3, label:"Cache automatico"},
    {id:4, label:"Gerenciamento de loading automatico"},
    {id:5, label:"Ideal para projetos grandes"},
    {id:6, label:"Curva de aprendizado alto"}
  ]

export const RowsTable: RownItemHome[] = [
    {id:1, name:"Fetch",hasExternalLib:false,hasAutomaticCache:false,hasLoading:false,goodForBigProjects:false, bigLearningCourve:false},
    {id:2, name:"Axios",hasExternalLib:true,hasAutomaticCache:false,hasLoading:false,goodForBigProjects:false, bigLearningCourve:false},
    {id:3, name:"Thunk",hasExternalLib:true,hasAutomaticCache:false,hasLoading:false,goodForBigProjects:true, bigLearningCourve:true},
    {id:4, name:"RTK",hasExternalLib:true,hasAutomaticCache:true,hasLoading:true,goodForBigProjects:true, bigLearningCourve:true}
  ]