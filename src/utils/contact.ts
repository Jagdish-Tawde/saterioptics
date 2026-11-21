export function whatsappUrl(number: string, message: string): string | undefined {
  const digits = number.trim().replace(/[\s()+.-]/g, '')
  if (!/^[1-9]\d{7,14}$/.test(digits)) return undefined
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export function phoneUrl(number: string): string | undefined {
  const formatted = number.trim().replace(/[\s().-]/g, '')
  return /^\+?\d{7,15}$/.test(formatted) ? `tel:${formatted}` : undefined
}
