import axios, { AxiosInstance } from "axios"
import {
  NMTParams as NMTData,
  NMTResultMessage,
  PapagoHeaders,
} from "../types/nmt"

export class HTTP {
  async post(
    url: string,
    data: NMTData,
    headers: PapagoHeaders
  ): Promise<NMTResultMessage> {
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
