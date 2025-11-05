"use client"
import { useLocale } from "@/components/i18n/LocaleProvider"
export default function About(){ const { t } = useLocale(); return (<div className="mx-auto max-w-3xl px-4 py-20"><h1 className="text-3xl font-semibold tracking-tight">{t("about.title")}</h1><p className="mt-4 text-black/70">{t("about.body")}</p></div>) }