// Convertit une couleur CSS (#rgb, #rrggbb, rgb() ou rgba()) en tableau [r, g, b].
// Renvoie `fallback` si le format n'est pas reconnu.
export function parseColor(value, fallback = [0, 229, 255]) {
  const text = String(value ?? '').trim()

  let match = text.match(/^#([0-9a-f]{3})$/i)
  if (match) return match[1].split('').map((c) => parseInt(c + c, 16))

  match = text.match(/^#([0-9a-f]{6})$/i)
  if (match) {
    const hex = match[1]
    return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16))
  }

  match = text.match(/^rgba?\(\s*(\d{1,3})[\s,]+(\d{1,3})[\s,]+(\d{1,3})/i)
  if (match) return [Number(match[1]), Number(match[2]), Number(match[3])]

  return fallback
}
