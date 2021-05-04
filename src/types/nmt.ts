export type NMTSupportedLangs =
  | "ko"
  | "en"
  | "ja"
  | "zh-CN"
  | "zh-TW"
  | "vi"
  | "id"
  | "th"
  | "de"
  | "ru"
  | "es"
  | "it"
  | "fr"

export interface NMTParams {
  source: string
  target: string
  text: string
}

export interface PapagoHeaders {
  "X-Naver-Client-Id": string
  "X-Naver-Client-Secret": string
}

export interface NMTResultInterface {
  srcLangType: string
  tarLangType: string
  translatedText: string
}
