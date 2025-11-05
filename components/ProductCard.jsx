"use client"
import Link from "next/link"
import { useCart } from "@/components/cart/CartProvider"
import { useLocale } from "@/components/i18n/LocaleProvider"
export default function ProductCard({ product }){
  const { add } = useCart()
  const { locale } = useLocale()
  const base = `/${locale}`
  return (
    <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden hover:shadow-soft transition-all">
      <Link href={`${base}/products/${product.slug}`}>
        <div className="aspect-[4/3] overflow-hidden bg-brand-light">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium leading-tight"><Link href={`${base}/products/${product.slug}`}>{product.name}</Link></h3>
            <p className="text-sm text-black/60 mt-1">{product.short}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="font-semibold">{product.currency} {product.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="mt-4">
          <button onClick={() => add(product)} className="w-full rounded-xl border px-4 py-2 text-sm hover:shadow-soft">Add</button>
        </div>
      </div>
    </div>
  )
}
