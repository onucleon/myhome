"use client"
import { products } from "@/lib/products"
import ProductCard from "@/components/ProductCard"
import { useLocale } from "@/components/i18n/LocaleProvider"
export default function ProductGrid(){
  const { t } = useLocale()
  return (
    <section id="catalog" className="mx-auto max-w-6xl px-4 pb-20">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-xl font-semibold tracking-tight">{t('grid.title')}</h2>
        <p className="text-sm text-black/60">{t('grid.subtitle')}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
