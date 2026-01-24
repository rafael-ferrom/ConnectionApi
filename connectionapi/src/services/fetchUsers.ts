
import type { CreateUserDTO } from "../dtos/CreateUserDTO";
import type { UpdateUserDTO } from "../dtos/UpdateUserDTO";
import type { IUsersJPH } from "../models/User";
import { fetchURL } from "../utils/Url";

export async function fetchData():Promise<IUsersJPH[]> {
  try {
    const response = await fetch(fetchURL)

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`)
    }

    const data = await response.json()
    return data

  } catch (error) {
    console.error("Erro ao buscar dados:", error)
    throw error
  }
}

export async function createUser(
  body: CreateUserDTO
): Promise<IUsersJPH> {
  const response = await fetch(fetchURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`)
  }

  const data: IUsersJPH = await response.json()
  return data
}

export async function updateUser(
  id: number,
  body: UpdateUserDTO
): Promise<IUsersJPH> {
  const response = await fetch(`${fetchURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`)
  }

  const data: IUsersJPH = await response.json()
  return data
}

export async function deleteUser(id: number): Promise<void> {
  try {
    const response = await fetch(
      `${fetchURL}/${id}`,
      { method: "DELETE" }
    )

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`)
    }

  } catch (error) {
    console.error("Erro ao deletar usuário:", error)
    throw error
  }
}
