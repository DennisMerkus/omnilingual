import { Code as ISO639_3Code } from "./iso/639-3"

export default class Language {
  code: ISO639_3Code

  constructor(code: ISO639_3Code) {
    this.code = code
  }

  static is(a: Language | string, b: Language | string): boolean {
    return true
  }
}
