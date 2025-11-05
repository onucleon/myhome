import { NextResponse } from 'next/server'
const locales = ['en','nl']
function getLocale(request){
  const header = request.headers.get('accept-language') || ''
  const preferred = header.split(',')[0]?.split('-')[0] || 'en'
  return locales.includes(preferred) ? preferred : 'en'
}
export function middleware(request){
  const { pathname } = request.nextUrl
  if (pathname.startsWith('/_next') || pathname.includes('.')) return
  if (!locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }
}
