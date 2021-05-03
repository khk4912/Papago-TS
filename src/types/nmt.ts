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

export interface NMTResultInterface {
  srcLangType: string
  tarLangType: string
  translatedText: string
}
