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

export type NMTSupportedLangsByLangs = {
  ko:
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
  en: "ko" | "ja" | "fr" | "zh-CN" | "zh-TW"
  ja: "ko" | "en" | "zh-CN" | "zh-TW"
  "zh-CN": "ko" | "en" | "ja" | "zh-TW"
  "zh-TW": "ko" | "en" | "ja" | "zh-CN"
  vi: "ko"
  id: "ko"
  th: "ko"
  de: "ko"
  ru: "ko"
  es: "ko"
  it: "ko"
  fr: "ko" | "en"
}

export interface NMTParams {
  source: string
  target: string
  text: string
}

export interface PapagoHeaders {
  "X-Naver-Client-Id": string
  "X-Naver-Client-Secret": string
}

export interface NMTResultMessage {
  message: {
    "@type": string
    "@service": string
    "@version": string
    result: NMTResult
  }
}

export interface NMTResult {
  srcLangType: string
  tarLangType: string
  translatedText: string
}
