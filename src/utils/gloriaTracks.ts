export const GLORIA_PRIORITY_TRACKS = [
  '吉他与孤独与蓝色星球',
  '那支乐队',
  '如果能成为星座',
  '无法歌唱的情歌',
  '小小的海',
  '青春复杂',
  '绝不忘记',
  '空洞空洞',
  '向光之中',
  '秘密基地',
] as const

export const GLORIA_TRACKS = [
  '吉他与孤独与蓝色星球',
  '那支乐队',
  '如果能成为星座',
  '无法歌唱的情歌',
  '小小的海',
  '青春复杂',
  '绝不忘记',
  '空洞空洞',
  '向光之中',
  '秘密基地',
  '什么错了',
  '滚动的岩石',
  '现在我在地下',
  '独自一人的东京',
  '蓝色春天',
  'Distortion',
  '闪闪发光吧',
  '忘れてやらない',
  '星座になれたら',
  'ギターと孤独と蒼い惑星',
] as const

let sessionSeed: number | null = null

function getSessionSeed(): number {
  if (sessionSeed !== null)
    return sessionSeed

  const random = new Uint32Array(1)
  globalThis.crypto?.getRandomValues?.(random)
  sessionSeed = random[0] || Date.now()
  return sessionSeed
}

function createRandom(seed: number): () => number {
  let state = seed >>> 0
  return () => {
    state += 0x6D2B79F5
    let value = state
    value = Math.imul(value ^ (value >>> 15), value | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

export function assignUniqueGloriaTracks(nodeIds: string[]): Map<string, string> {
  const sortedNodeIds = [...new Set(nodeIds)].sort((a, b) => a.localeCompare(b))
  const priorityTracks = new Set<string>(GLORIA_PRIORITY_TRACKS)
  const otherTracks = GLORIA_TRACKS.filter(track => !priorityTracks.has(track))
  const random = createRandom(getSessionSeed())

  for (let index = otherTracks.length - 1; index > 0; index--) {
    const target = Math.floor(random() * (index + 1))
    const currentTrack = otherTracks[index]!
    otherTracks[index] = otherTracks[target]!
    otherTracks[target] = currentTrack
  }

  const tracks = [...GLORIA_PRIORITY_TRACKS, ...otherTracks]

  return new Map(sortedNodeIds.map((nodeId, index) => [
    nodeId,
    tracks[index % tracks.length]!,
  ]))
}
