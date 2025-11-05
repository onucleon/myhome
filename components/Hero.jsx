"use client"
import Link from "next/link"
import { useLocale } from "@/components/i18n/LocaleProvider"
export default function Hero(){
  const { t, locale } = useLocale()
  const base = `/${locale}`
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
      <div className="rounded-3xl border border-black/5 bg-white p-10 md:p-16 shadow-soft">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl tracking-tight font-semibold">{t('hero.title')}</h1>
            <p className="mt-4 text-black/60">{t('hero.subtitle')}</p>
            <div className="mt-8 flex items-center gap-4">
              <Link href={`${base}/#catalog`} className="rounded-full bg-black text-white px-6 py-3 text-sm hover:opacity-90">{t('hero.shop')}</Link>
              <Link href={`${base}/about`} className="rounded-full border px-6 py-3 text-sm hover:shadow-soft">{t('hero.learn')}</Link>
            </div>
          </div>
          <div className="relative h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl border border-black/5">
            <img src="https://images.unsplash.com/photo-1526312426976-593c82f0b5a9?q=80&w=1600&auto=format&fit=crop" alt="La Opala dinner set" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
