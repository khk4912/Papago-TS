import { DetectData, DetectLangs, DetectMessage } from "./types/detect"
import {
  NMTSupportedLangs,
  PapagoHeaders,
  NMTSupportedLangsByLangs,
  NMTData,
  NMTResultMessage,
} from "./types/nmt"
import { HTTP } from "./utils/request"

const NMT_BASE_URL = "https://openapi.naver.com/v1/papago/n2mt"
const DETECT_BASE_URL = "https://openapi.naver.com/v1/papago/detectLangs"

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
  ): Promise<string> {
    let http = await new HTTP().post<NMTData, NMTResultMessage>(
      NMT_BASE_URL,
      { source: source, target: target, text: text },
      this.createHeaders()
    )
    return http.message.result.translatedText
  }

  async detectLangs(text: string): Promise<DetectLangs> {
    let http = await new HTTP().post<DetectData, DetectMessage>(
      DETECT_BASE_URL,
      { query: text },
      this.createHeaders()
    )
    return http.langCode
  }
  private createHeaders(): PapagoHeaders {
    return {
      "X-Naver-Client-Id": this.clientID,
      "X-Naver-Client-Secret": this.clientSecret,
    }
  }
}
