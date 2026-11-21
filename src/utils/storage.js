// Accès sécurisé au localStorage : certains navigateurs (cookies bloqués, mode privé strict,
// WebViews) lèvent une exception dès qu'on touche à window.localStorage.
export function safeGetItem(key) {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function safeSetItem(key, value) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Stockage indisponible : on continue simplement sans mémoriser le choix.
  }
}
