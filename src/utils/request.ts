import axios, { AxiosInstance } from "axios"
import { NMTParams as NMTData, PapagoHeaders } from "../types/nmt"

export class HTTP {
  post(url: string, data: NMTData, headers: PapagoHeaders) {
    return axios
      .post(url, data, { headers: headers })
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        if (err.response) {
          throw new PapagoError(
            `[${err.response.data.errorCode}] ${err.response.data.errorMessage}`
          )
        }
      })
  }
}

class PapagoError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "PapagoError"
  }
}
