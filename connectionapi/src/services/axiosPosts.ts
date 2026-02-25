import axios from "axios";
import { axiosURL } from "../utils/Url";
import type { Post } from "../models/Post";

export async function getAxiosPost(): Promise<Post[]> {
  try {
    const response = await axios.get<Post[]>(axiosURL);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getAxiosSpecificPost(id: number): Promise<Post> {
  try {
    const response = await axios.get<Post>(`${axiosURL}/${id}`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function postAxiosPost(): Promise<Post> {
  try {
    const response = await axios.post<Post>(axiosURL, {
      userId: 11,
      id: 201,
      title: "teste",
      body: "teste2",
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function deleteAxiosPost(id: number){
    try{
        const response = await axios.delete<Post>(`${axiosURL}/${id}`)
        if(!response){
            throw new Error ("Erro");
        }
    }
    catch(err){
        console.error(err)
        throw err
    }
}

export async function putAxiosPost(id: number, post: Post){
    try{
        const response = await axios.put<Post>(`${axiosURL}/${id}`, post)
        if(response){
            console.log("feitooo");
            
        }
        
    }
    catch(err){
        console.error(err)
        throw err
    }

}
