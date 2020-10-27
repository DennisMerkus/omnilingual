import { Code as LanguageCode } from "./iso/639-3"
import { Code as RegionCode } from './iso/3166-1-alpha-2'

export class Tag {
  code: Code

  constructor(code: Code) {
    this.code = code
  }

  static parseTag(tag: string): Tag {
    const tagRegex = new RegExp(`([${Object.values(LanguageCode).join('|')}])([${Object.values(RegionCode).join('|')}])?`)
  }

  toString(): string {
    return this.code
  }
}

export type IETFTag = Tag
