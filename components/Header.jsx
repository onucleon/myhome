"use client"
import Link from "next/link"
import { useCart } from "@/components/cart/CartProvider"
import { useLocale } from "@/components/i18n/LocaleProvider"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
  const { count, open } = useCart()
  const { t, locale } = useLocale()
  const base = `/${locale}`
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href={base} className="flex items-center gap-2">
          <img src="/logo.svg" alt="FARMERZ" className="h-8 w-8" />
          <span className="font-semibold tracking-tight">{t('brand')}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href={base} className="opacity-70 hover:opacity-100">{t('nav.home')}</Link>
          <Link href={`${base}/#catalog`} className="opacity-70 hover:opacity-100">{t('nav.catalog')}</Link>
          <Link href={`${base}/about`} className="opacity-70 hover:opacity-100">{t('nav.about')}</Link>
          <Link href={`${base}/contact`} className="opacity-70 hover:opacity-100">{t('nav.contact')}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button onClick={open} className="rounded-full border px-4 py-1.5 text-sm hover:shadow-soft">
            {t('nav.cart')} {count > 0 ? `(${count})` : ""}
          </button>
        </div>
      </div>
    </header>
  )
}
