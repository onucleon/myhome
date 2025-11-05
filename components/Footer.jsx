"use client"
import { useLocale } from "@/components/i18n/LocaleProvider"
export default function Footer(){
  const { t } = useLocale()
  return (
    <footer className="border-t border-black/5 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-black/60">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} {t('brand')}. All rights reserved.</p>
          <p className="opacity-70">{t('footer.line')}</p>
        </div>
      </div>
    </footer>
  )
}
