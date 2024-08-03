export const clearText = (text: string): number =>
  parseInt(text.replace(/\D/g, '')) || 0
