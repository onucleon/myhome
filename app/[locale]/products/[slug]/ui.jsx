"use client"
import { useCart } from "@/components/cart/CartProvider"
import { useLocale } from "@/components/i18n/LocaleProvider"
export function AddToCart({ product }){ const { add, open } = useCart(); const { t } = useLocale(); function handle(){ add(product); open() } return (<button onClick={handle} className="rounded-xl bg-black text-white px-5 py-2.5 text-sm hover:opacity-90">{t("product.add")}</button>) }