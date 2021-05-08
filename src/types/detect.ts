export interface DetectData {
  query: string
}

export interface DetectMessage {
  langCode: DetectLangs
}

export type DetectLangs =
  | "ko"
  | "ja"
  | "zh-cn"
  | "zh-tw"
  | "hi"
  | "en"
  | "es"
  | "fr"
  | "de"
  | "pt"
  | "vi"
  | "id"
  | "fa"
  | "ar"
  | "mm"
  | "th"
  | "ru"
  | "it"
  | "unk"
