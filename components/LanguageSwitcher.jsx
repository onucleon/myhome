"use client"
import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "./i18n/LocaleProvider"

export default function LanguageSwitcher() {
  const { locale, t } = useLocale()
  const router = useRouter()
  const pathname = usePathname() || ""

  function switchTo(target) {
    const segs = pathname.split("/")
    segs[1] = target
    const next = segs.join("/") || `/${target}`
    router.push(next)
  }
  return (
    <div className="flex items-center gap-2">
      <span className="sr-only">{t('lang.label')}</span>
      <button onClick={() => switchTo('en')} className={`text-sm px-2 py-1 rounded ${locale==='en'?'border':''}`}>EN</button>
      <button onClick={() => switchTo('nl')} className={`text-sm px-2 py-1 rounded ${locale==='nl'?'border':''}`}>NL</button>
    </div>
  )
}
