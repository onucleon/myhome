"use client"
import { useCart } from "./CartProvider"
import { useLocale } from "@/components/i18n/LocaleProvider"
export default function CartDrawer(){
  const { isOpen, close, items, total, inc, dec, remove, clear } = useCart()
  const { t } = useLocale()
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <div className={`absolute inset-0 bg-black/30 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={close} />
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white border-l border-black/10 shadow-xl transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold tracking-tight">{t('cart.title')}</h3>
          <button onClick={close} className="text-sm opacity-60 hover:opacity-100">{t('cart.close')}</button>
        </div>
        <div className="p-4 space-y-4 max-h-[calc(100%-140px)] overflow-auto">
          {items.length === 0 && <p className="text-sm text-black/60">{t('cart.empty')}</p>}
          {items.map(item => (
            <div key={item.id} className="flex gap-3 items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover border" />
              <div className="flex-1">
                <p className="text-sm font-medium leading-tight">{item.name}</p>
                <p className="text-xs text-black/60 mt-0.5">{item.currency} {item.price.toFixed(2)}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => dec(item.id)} className="w-6 h-6 border rounded">-</button>
                  <span className="w-6 text-center text-sm">{item.qty}</span>
                  <button onClick={() => inc(item.id)} className="w-6 h-6 border rounded">+</button>
                  <button onClick={() => remove(item.id)} className="ml-auto text-xs opacity-60 hover:opacity-100">{t('cart.remove')}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <span className="text-sm text-black/60">{t('cart.subtotal')}</span>
            <span className="font-medium">EUR {total.toFixed(2)}</span>
          </div>
          <button onClick={() => alert('Prototype checkout — integrate Stripe later.')} className="mt-3 w-full rounded-xl bg-black text-white py-2.5 text-sm hover:opacity-90">{t('cart.checkout')}</button>
          <button onClick={clear} className="mt-2 w-full rounded-xl border py-2 text-sm">{t('cart.clear')}</button>
        </div>
      </aside>
    </div>
  )
}
