export function formatAsARS(price) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price)
}

console.log(formatAsARS(84990)) // imprime "ARS 84.990,00"
