import { NMTSupportedLangs, PapagoHeaders } from "./types/nmt"
import { HTTP } from "./utils/request"

const NMT_BASE_URL: string = "https://openapi.naver.com/v1/papago/n2mt"

export default class Papago {
  private clientID: string
  private clientSecret: string

  constructor(clientID: string, clientSecret: string) {
    this.clientID = clientID
    this.clientSecret = clientSecret
  }

  async nmtTranslate(
    source: NMTSupportedLangs,
    target: NMTSupportedLangs,
    text: string
  ) {
    let http = await new HTTP().post(
      NMT_BASE_URL,
      { source: source, target: target, text: text },
      this.createHeaders()
    )
    return http
  }

  createHeaders(): PapagoHeaders {
    return {
      "X-Naver-Client-Id": this.clientID,
      "X-Naver-Client-Secret": this.clientSecret, // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }
  }
}
