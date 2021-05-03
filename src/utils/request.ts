import axios from "axios"

const BASE_URL: string = "https://openapi.naver.com/v1/papago/"

export class HTTP {
  BASE_URL: string = "https://openapi.naver.com/v1/papago/"

  async get(params: object, headers: object) {
    return await axios
      .get(BASE_URL, { params: params, headers: headers })
      .then((res) => res.data)
  }
}
