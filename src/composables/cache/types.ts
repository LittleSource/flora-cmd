export type cache = Map<string, string>

export abstract class cacheObject {
  abstract initCache(): void
  abstract getCache(key: string): string
  abstract setCache(key, value: string)
}
