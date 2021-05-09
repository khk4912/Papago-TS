import axios from "axios"
import { PapagoHeaders } from "../types/nmt"

export class HTTP {
  async get<T, S>(url: string, params: T, headers: PapagoHeaders): Promise<S> {
    try {
      const res = await axios.post(url, null, {
        params: params,
        headers: headers,
      })
      return res.data
    } catch (err) {
      if (err.response) {
        throw new PapagoError(
          `[${err.response.data.errorCode}] ${err.response.data.errorMessage}`
        )
      }
      throw new PapagoError("Failed to connect with API")
    }
  }

  async post<T, S>(url: string, data: T, headers: PapagoHeaders): Promise<S> {
    try {
      const res = await axios.post(url, data, { headers: headers })
      return res.data
    } catch (err) {
      if (err.response) {
        throw new PapagoError(
          `[${err.response.data.errorCode}] ${err.response.data.errorMessage}`
        )
      }
      throw new PapagoError("Failed to connect with API")
    }
  }
}

class PapagoError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "PapagoError"
  }
}
