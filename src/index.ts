import { NMTSupportedLangs } from "./types/nmt"

class Papago {
  constructor(private clientID: string, private clientSecret: string) {
    this.clientID = clientID
    this.clientSecret = clientSecret
  }
  nmt(source: NMTSupportedLangs, target: NMTSupportedLangs, text: string) {
    throw new Error("Soon")
  }
}
