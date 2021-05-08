import {
  NMTSupportedLangs,
  PapagoHeaders,
  NMTResult,
  NMTSupportedLangsByLangs,
} from "./types/nmt"
import { HTTP } from "./utils/request"

const NMT_BASE_URL: string = "https://openapi.naver.com/v1/papago/n2mt"

export default class Papago {
  private clientID: string
  private clientSecret: string

  constructor(clientID: string, clientSecret: string) {
    this.clientID = clientID
    this.clientSecret = clientSecret
  }

  async nmtTranslate<T extends NMTSupportedLangs>(
    source: T,
    target: NMTSupportedLangsByLangs[T],
    text: string
  ): Promise<NMTResult> {
    let http = await new HTTP().post(
      NMT_BASE_URL,
      { source: source, target: target, text: text },
      this.createHeaders()
    )
    return http.message.result
  }

  private createHeaders(): PapagoHeaders {
    return {
      "X-Naver-Client-Id": this.clientID,
      "X-Naver-Client-Secret": this.clientSecret,
    }
  }
}
