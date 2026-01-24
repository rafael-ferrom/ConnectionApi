import { fetchURL } from "../utils/Url";

export async function fetchData() {
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