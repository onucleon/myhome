import { products } from "@/lib/products"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { AddToCart } from "./ui"
import en from "@/lib/dictionaries/en.json"
import nl from "@/lib/dictionaries/nl.json"

export function generateStaticParams(){
  return ['en','nl'].flatMap(locale => products.map(p => ({ locale, slug: p.slug })))
}

export default function ProductPage({ params }){
  const product = products.find(p => p.slug === params.slug)
  if (!product) return notFound()
  const dict = params.locale === "nl" ? nl : en
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="rounded-2xl border border-black/5 overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{product.name}</h1>
          <p className="mt-2 text-black/60">{product.short}</p>
          <p className="mt-4 text-xl font-medium">{product.currency} {product.price.toFixed(2)}</p>
          <div className="mt-6">
            <Suspense fallback={<div className='h-10 w-40 bg-black/5 rounded'/>}>
              <AddToCart product={product} />
            </Suspense>
          </div>
          <ul className="mt-8 space-y-2 text-sm text-black/70">
            {product.specs?.map((s, i) => <li key={i}>• {s}</li>)}
          </ul>
        </div>
      </div>
      {product.gallery?.length ? (
        <div className="mt-16">
          <h2 className="text-lg font-semibold tracking-tight">{dict.product.gallery}</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.gallery.map((g, i) => (<img key={i} src={g} alt={`${product.name} ${i+1}`} className="rounded-xl border" />))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
