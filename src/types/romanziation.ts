export interface RomanziationParams {
  query: string
}

export interface RomanziationMessage {
  aResult: [RomanaResult]
}

export interface RomanaResult {
  sFirstname: string
  aItems: RomanaItems[]
}

interface RomanaItems {
  name: string
  score: string
}
