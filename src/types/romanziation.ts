export interface RomanizationParams {
  query: string
}

export interface RomanizationMessage {
  aResult: [RomanizationaResult]
}

export interface RomanizationaResult {
  sFirstname: string
  aItems: RomanizationaItems[]
}

interface RomanizationaItems {
  name: string
  score: string
}
