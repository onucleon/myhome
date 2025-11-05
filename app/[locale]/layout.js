import "../globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CartProvider } from "@/components/cart/CartProvider"
import CartDrawer from "@/components/cart/CartDrawer"
import { LocaleProvider } from "@/components/i18n/LocaleProvider"
import en from "@/lib/dictionaries/en.json"
import nl from "@/lib/dictionaries/nl.json"

export const dynamic = 'force-static'
export const metadata = { title: "FARMERZ — La Opala Tableware", description: "Premium opalware & glassware. Clean, minimal, Apple-like aesthetic." }

export function generateStaticParams(){ return [{locale:'en'},{locale:'nl'}] }

export default function LocaleLayout({ children, params }){
  const dict = params.locale === 'nl' ? nl : en
  return (
    <html lang={params.locale}>
      <body>
        <LocaleProvider locale={params.locale} dict={dict}>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
